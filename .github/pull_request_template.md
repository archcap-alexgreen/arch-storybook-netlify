### 1) What is the status of the feature?

**DEVELOPMENT** | **READY FOR QA**

( Choose one and delete the other )

### 2) What is this pull request for?

( Describe the feature or functionality )

- Link to Jira ticket
- Link to design in Abstract
- Link to related documentation

### 3) What should the reviewer look at?

( Any specific areas to focus on )

### 4) What GIF best describes this PR or how it makes you feel?

( Replace with an appropriate GIF of your choice: https://giphy.com/ )

![Welcome to Jurassic World](https://media.giphy.com/media/TaZh6NiCVityg/giphy.gif)

## Pre-Flight Checklist

**Below are the most common problems found during code reviews.** Check your work before submitting this PR.

- [ ] No spelling errors. (Consider installing a [spell checker extension](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker).)
- [ ] No commented-out code.
- [ ] No warnings (Stylelint or ESLint) or errors in test or console output.
- [ ] No browser console errors that are _attributed to your changes_.

### Cross-Browser Tested:

- [x] Chrome
- [ ] Internet Explorer 11
- [ ] Safari
- [ ] Edge
- [ ] Firefox

### Accessibility Tested:

Run a quick scan of the [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) in Chrome Dev Tools.

( Test all that apply )

#### Perceivable

- [ ] Form fields have a corresponding `<label>` element
- [ ] Images have alternate text
- [ ] Purely decorative elements are invisible to assistive technologies
- [ ] Accessible text is provided for action items where no text is visible

#### Operable

- [ ] Tab order logically follows the DOM order
- [ ] All action items are focusable (buttons, form fields, links, etc)
- [ ] No keyboard traps (focus gets stuck on one element and can't leave)
