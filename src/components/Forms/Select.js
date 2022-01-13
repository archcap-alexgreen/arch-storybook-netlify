import { text, select, boolean, array } from '@storybook/addon-knobs';

const selectOptions = ['Red', 'Green', 'Blue'];
const sizeOptions = {
  large: 'acg-form__select__input--large',
  medium: 'acg-form__select__input--medium',
  small: 'acg-form__select__input--small'
};

export const selectDropdown = () => {
  const label = text('Label', 'Select A Color');
  const options = array(label, selectOptions, ',');
  const size = select('Size', sizeOptions, sizeOptions.medium);
  const disabled = boolean('Disabled', false);

  return `
    <div class="acg-form__row">
      <label for="select-input" class="acg-form__label">${label}</label>
      <div class="acg-form__select">
        <select
          class="acg-form__select acg-form__select__input  ${size} "
          id="select-input"
          name="select-input"
          ${disabled ? 'disabled' : ''}
        > 
        
        <option>Select...</option>
        ${options.map(option => `<option>${option}</option>`).join('\n\t')}
        </select>
      </div>
    </div>
  `;
};

export const selectTopic = () => {
  const label = text('Label', 'Explore');
  const options = array(
    'Options',
    ['Alternative Markets', 'Business', 'Community', 'Homeowners', 'Mortgage'],
    ', '
  );

  return `
    <div class="acg-select-topic acg-form__row">
      <label for="select-topic" class="acg-form__label">
      <span class="acg-select-topic__label">${label}</span>
      <div class="acg-select-topic__value">
        <button id="select-topic-trigger" class="acg-select-topic__trigger acg-btn">All Topics</button>
        <div class="acg-form__select">
          <select
            class="acg-form__select acg-form__select__input"
            id="select-topic"
            name="topic"
            data-ui="select-query"
            aria-labelledby="select-topic-trigger"
          > 
          <option value="all">All Topics</option>
          ${options
            .map(
              option =>
                `<option value="${option
                  .toLowerCase()
                  .split(' ')
                  .join('-')}">${option}</option>`
            )
            .join('\n\t')}
          </select>
        </div>
      </div>
      </label>
    </div>
  `;
};

export default {
  selectDropdown,
  selectTopic
};
