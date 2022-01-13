import { text, select, boolean } from '@storybook/addon-knobs';
import stateIcon from './stateIcon';

const sizeOptions = {
  large: 'acg-form__input--large',
  medium: 'acg-form__input--medium',
  small: 'acg-form__input--small'
};

const stateOptions = {
  default: '',
  success: 'acg-form--is-success',
  error: 'acg-form--is-error'
};

export const textInput = () => {
  const label = text('Label', 'Text Input');
  const type = text('Type', 'text');
  const value = text('Value', '');
  const placeholder = text('Placeholder', 'Enter Text...');
  const errorMessage = text('Error Message', 'Error Message');
  const size = select('Size', sizeOptions, sizeOptions.medium);
  const state = select('State', stateOptions, stateOptions.default);
  const disabled = boolean('Disabled', false);

  return `
    <div class="acg-form__row">
      <label 
        for="text-field-1"
        class="acg-form__label"
      >
        ${label}
      </label>
      <input
        type="${type}" 
        value="${value}"
        placeholder="${placeholder}"
        class="acg-form__input ${size} ${state}"
        id="text-field-1"
        name="text-field-1" ${disabled ? '\n\tdisabled' : ''}
      >
      ${stateIcon(state)}${
    state === stateOptions.error
      ? `<p class="acg-form__input__error-msg">${errorMessage}</p>`
      : ''
  }
    </div>
  `;
};

export default textInput;
