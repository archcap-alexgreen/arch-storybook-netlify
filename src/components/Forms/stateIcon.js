/**
 * Returns SVG icon markup based on the provided `state`.
 * Expects `state` to follow the naming conventions of the state classes found in _forms.scss
 * @param {string} state
 */

const stateIcon = state => {
  switch (state) {
    case 'acg-form--is-success':
      return '<div class="acg-form__state-icon acg-form__state-icon--success"><i class="fas fa-check"></i></div>';
    case 'acg-form--is-error':
      return '<div class="acg-form__state-icon acg-form__state-icon--error"><i class="fas fa-exclamation"></i></div>';
    default:
      return '';
  }
};

export default stateIcon;
