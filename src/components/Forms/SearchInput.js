import { text, select, boolean } from '@storybook/addon-knobs';

const sizeOptions = {
  large: 'acg-form__input--large',
  medium: 'acg-form__input--medium',
  small: 'acg-form__input--small'
};

export const searchInput = () => {
  const placeholder = text('Placeholder', 'Search...');
  const size = select('Size', sizeOptions, sizeOptions.medium);
  const disabled = boolean('Disabled', false);

  return `
    <div class="acg-form__row">
      <label 
        for="search"
        class="acg-form__label acg-accessibly-hidden"
      >
        Search
      </label>
      <div class="acg-search__wrapper">
        <input
          type="search" 
          placeholder="${placeholder}"
          class="acg-form__search__input acg-form__input ${size}"
          autocomplete="off"
          id="search"
          name="search" ${disabled ? '\n\tdisabled' : ''}
        >
        <div class="acg-form__search-icon"><i class="fas fa-search"></i></div>
      </div>
    </div>
  `;
};

export default searchInput;
