import { select, text, boolean } from '@storybook/addon-knobs';

// #region knob option objects
const styles = {
  Primary: 'acg-btn--primary',
  Secondary: 'acg-btn--secondary',
  Link: 'acg-btn--link'
};

const states = {
  Active: '',
  Disabled: 'disabled'
};

const icons = {
  Add: 'fas fa-plus',
  Check: 'fas fa-check',
  ChevronDown: 'fas fa-chevron-down',
  ChevronLeft: 'fas fa-chevron-left',
  ChevronRight: 'fas fa-chevron-right',
  ChevronUp: 'fas fa-chevron-up',
  Close: 'fas fa-times',
  File: 'far fa-file',
  Minus: 'fas fa-minus',
  Search: 'fas fa-search',
  Trash: 'far fa-trash-alt'
};
// #endregion

// #region individual button stories
export const Text = () => {
  const buttonText = text('Button Text', 'Button Text');
  const buttonStyle = select('Style', styles, styles.Primary);
  const buttonState = select('State', states, states.Active);

  return `
    <button type="button" class="acg-btn ${buttonStyle}" ${buttonState}>
      ${buttonText}
    </button>`;
};

export const Link = () => {
  const buttonText = text('Button Text', 'Button Text');
  const buttonState = select('State', states, states.Active);

  return `
    <button type="button" class="acg-btn acg-btn--link" ${buttonState}>
      ${buttonText}
    </button>`;
};

export const Icon = () => {
  const iconId = select('Icon', icons, icons.Add);
  const buttonText = text('Button Title', 'Button Title');
  const buttonStyle = select('Style', styles, styles.Primary);
  const buttonState = select('State', states, states.Active);

  return `
    <button type="button" class="acg-btn acg-btn--icon ${buttonStyle}" ${buttonState}>
     <i class='${iconId}'></i>
    <span class="acg-accessibly-hidden">${buttonText}</span>
    </button>`;
};

export const IconWithText = () => {
  const iconId = select('Icon', icons, icons.Add);
  const buttonText = text('Button Text', 'Button Text');
  const buttonStyle = select('Style', styles, styles.Primary);
  const buttonState = select('State', states, states.Active);

  return `
    <button type="button" class="acg-btn acg-btn--icon-text ${buttonStyle}" ${buttonState}>
    <i class='${iconId}'></i>
      ${buttonText}
    </button>`;
};
// #endregion

// #region all buttons story
export const All = () => {
  // knobs
  const showInfo = boolean('Show Component Info', false); // shows or hides component info
  const buttonText = text('Button Text', 'Button');
  const iconId = select('Icon', icons, icons.Add);

  // wrapper div for each button example
  const itemWrapper = children => `
    <div
      class="documentation-grid--item ${showInfo ? 'documentation-block' : ''}"
      style="${showInfo ? '' : 'text-align:center; padding: 20px 0;'}"
    >
      ${children}
    </div>`;

  // iterate over style and size objects to get all button examples
  const textButtonExamples = Object.keys(styles)
    .map(styleKey =>
      itemWrapper(`
            <button type="button" class="acg-btn ${styles[styleKey]}">
              ${buttonText}
            </button>
            <footer style="${showInfo ? '' : 'display: none'}">
              <span class="type-style--bold">Text Button</span>
              <span>style: ${styleKey}</span>
            </footer>
          `)
    )
    .join('');

  const iconButtonExamples = Object.keys(styles)
    .map(styleKey =>
      itemWrapper(`
            <button type="button" class="acg-btn acg-btn--icon ${
              styles[styleKey]
            }">
            <i class='${iconId}'></i>
              <span class="acg-accessibly-hidden">${buttonText}</span>
            </button>
            <footer style="${showInfo ? '' : 'display: none'}">
              <span class="type-style--bold">Icon Button</span>
              <span>style: ${styleKey}</span>
            </footer>
          `)
    )
    .join('');

  const iconTextButtonExamples = Object.keys(styles)
    .map(styleKey =>
      itemWrapper(`
            <button type="button" class="acg-btn acg-btn--icon-text ${
              styles[styleKey]
            }">
            <i class='${iconId}'></i>
                ${buttonText}
            </button>
            <footer style="${showInfo ? '' : 'display: none'}">
              <span class="type-style--bold">Icon Button With Text</span>
              <span>style: ${styleKey}</span>
            </footer>
          `)
    )
    .join('');

  const linkButtonExamples = itemWrapper(`
        <button type="button" class="acg-btn acg-btn--link">
          ${buttonText}
        </button>
        <footer style="${showInfo ? '' : 'display: none'}">
          <span class="type-style--bold">Link Button</span>
        </footer>
      `);

  const buttonExamples = [
    textButtonExamples,
    iconButtonExamples,
    iconTextButtonExamples,
    linkButtonExamples
  ];

  return `<div class="documentation-grid">${buttonExamples.join('')}</div>`;
};
// #endregion

export default {
  All,
  Text,
  Link,
  Icon,
  IconWithText
};
