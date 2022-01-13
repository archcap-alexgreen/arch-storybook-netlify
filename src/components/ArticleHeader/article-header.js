class ArticleHeader {
  constructor() {
    // Bind class methods
    this.init = this.init.bind(this);
    this.updateMinutes = this.updateMinutes.bind(this);
    this.calculateMinutes = this.calculateMinutes.bind(this);
    this.parseWordCount = this.parseWordCount.bind(this);
    this.componentSelector = '[data-ui="read-time"]';
    this.minutesSelector = '[data-ui="read-minutes"]';

    // Initialize component on load
    document.addEventListener('DOMContentLoaded', this.init);
  }

  parseWordCount() {
    const count = Number(this.component.dataset.wordCount) || 0;

    if (isNaN(count)) {
      return 0;
    }

    return count;
  }

  saferInnerHtml(count) {
    const children = this.minutes.childNodes;
    const node = document.createTextNode(count);

    // Empty inner children
    for (let i = 0; i < children.length; i++) {
      this.minutes.removeChild(children[i]);
    }

    // Replace children
    return this.minutes.appendChild(node);
  }

  calculateMinutes(words) {
    const wordCount = words || this.parseWordCount();
    const wordsPerMinute = 200;

    return Math.round(wordCount / wordsPerMinute);
  }

  updateMinutes(wordCount) {
    const minutes = this.calculateMinutes(wordCount);

    this.saferInnerHtml(minutes);
  }

  init() {
    // Attach DOM elements
    this.component = document.querySelector(this.componentSelector);
    this.minutes = document.querySelector(this.minutesSelector);

    if (this.component && this.minutes) {
      this.updateMinutes();
    }
  }
}

window.acgArticleHeader = window.acgArticleHeader || new ArticleHeader();
