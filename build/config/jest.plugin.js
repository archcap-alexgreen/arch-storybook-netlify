const opener = require('opener');
const fse = require('fs-extra');

/**
 * Opens up index.html code coverage report file on the default web browser
 *
 * @param {Function} [done] - Resolver
 */
function openCoverage(done) {
  const file = 'coverage/index.html';

  fse.ensureFile(file, err => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      opener(file);
    }

    if (done) {
      done();
    }
  });
}

module.exports = class {
  apply(jestHooks) {
    let initialTestCoverageOpened = false;

    jestHooks.onTestRunComplete(() => {
      // Open coverage on first test run completion
      if (!initialTestCoverageOpened) {
        initialTestCoverageOpened = true;
        openCoverage();
      }
    });
  }

  getUsageInfo() {
    return {
      key: 'v',
      prompt: 'open code coverage report'
    };
  }

  run() {
    return new Promise(openCoverage);
  }
};
