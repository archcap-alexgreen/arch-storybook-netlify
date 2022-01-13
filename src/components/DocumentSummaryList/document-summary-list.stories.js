import { boolean, select, text } from '@storybook/addon-knobs';

const colorOptions = {
  aqua: 'acg-doc-summary-list--aqua',
  beige: 'acg-doc-summary-list--beige',
  blue: 'acg-doc-summary-list--blue',
  green: 'acg-doc-summary-list--green',
  orange: 'acg-doc-summary-list--orange',
  purple: 'acg-doc-summary-list--purple',
  red: 'acg-doc-summary-list--red',
  teal: 'acg-doc-summary-list--teal',
  yellow: 'acg-doc-summary-list--yellow'
};

export const DocumentSummaryList = () => {
  const backgroundClass = select(
    'Background color',
    colorOptions,
    colorOptions.purple
  );
  const condensed = boolean('Condensed style', false);
  const condensedClass = condensed ? 'acg-doc-summary-list--condensed' : '';
  const pubdate = text('Publication Date', '6/6/2020');
  const category = text('Category', 'CA 2020-07');
  const tag = text('Tag', 'COVID-19');
  const excerpt = text(
    'Exercept',
    'Accumsan tempus dui pretium ultricies montes semper nascetur vitae quis senectus elit faucibus lacus, arcu nunc commodo fringilla sit ut metus integer turpis dictumst elementum.'
  );

  return `
   <div class="acg-doc-summary-list__block">
    <ul class="acg-doc-summary-list ${backgroundClass} ${condensedClass}">
      <li class="acg-doc-summary-list__item">
        <div class="acg-wrapper acg-doc-summary-list__split-layout">
          <div class="acg-doc-summary-list__split">
            <p class="acg-doc-summary-list__item__metadata">${pubdate} — ${category} — ${tag}</p>
            <a href="#" class="acg-doc-summary-list__item__title">
            <i class="acg-icon far fa-file-pdf"></i>
              Temporary Underwriting Requirements for Borrowers Using Self-Employment Income to Qualify
            </a>
            <p class="acg-doc-summary-list__item__excerpt">${excerpt}</p>
          </div>
          <div class="acg-doc-summary-list__split">
            <div class="acg-form__row">
              <label for="select-input" class="acg-form__label">Additional Languages</label>
              <div class="acg-form__select">
                <select class="acg-form__select acg-form__select__input  acg-form__select__input--medium " id="select-input" name="select-input">
                  <option>English</option>
                  <option>Italian</option>
                  <option>Spanish</option>
                  <option>German</option>
                </select>
              </div>
            </div>
            <a href="#" class="acg-btn acg-btn--secondary">Download</a>
          </div>
        </div>
      </li>

      <li class="acg-doc-summary-list__item">
        <div class="acg-wrapper acg-doc-summary-list__split-layout">
          <div class="acg-doc-summary-list__split">
            <p class="acg-doc-summary-list__item__metadata">${pubdate} — ${category} — ${tag}</p>
            <a href="#" class="acg-doc-summary-list__item__title">
            <i class="acg-icon far fa-file-pdf"></i>
              Temporary Underwriting Requirements for Borrowers Using Self-Employment Income to Qualify
            </a>
            <p class="acg-doc-summary-list__item__excerpt">${excerpt}</p>
          </div>
          <div class="acg-doc-summary-list__split">
            <a href="#" class="acg-btn acg-btn--secondary">Download</a>
          </div>
        </div>
      </li>

      <li class="acg-doc-summary-list__item">
        <div class="acg-wrapper acg-doc-summary-list__split-layout">
          <div class="acg-doc-summary-list__split">
            <p class="acg-doc-summary-list__item__metadata">${pubdate} — ${category} — ${tag}</p>
            <a href="#" class="acg-doc-summary-list__item__title">
            <i class="acg-icon far fa-file-pdf"></i>
              Updates to Temporary Underwriting Requirements
            </a>
            <p class="acg-doc-summary-list__item__excerpt">${excerpt}</p>
          </div>
          <div class="acg-doc-summary-list__split">
            <div class="acg-form__row">
              <label for="select-input" class="acg-form__label">Additional Languages</label>
              <div class="acg-form__select">
                <select class="acg-form__select acg-form__select__input  acg-form__select__input--medium " id="select-input" name="select-input">
                  <option>English</option>
                  <option>Italian</option>
                  <option>Spanish</option>
                  <option>German</option>
                </select>
              </div>
            </div>
            <a href="#" class="acg-btn acg-btn--secondary">Download</a>
          </div>
        </div>
      </li>

      <li class="acg-doc-summary-list__item">
        <div class="acg-wrapper acg-doc-summary-list__split-layout">
          <div class="acg-doc-summary-list__split">
            <p class="acg-doc-summary-list__item__metadata">${pubdate} — ${category} — ${tag}</p>
            <a href="#" class="acg-doc-summary-list__item__title">
            <i class="acg-icon far fa-file-pdf"></i>
              Additional Temporary Underwriting Requirements
            </a>
            <p class="acg-doc-summary-list__item__excerpt">${excerpt}</p>
          </div>
          <div class="acg-doc-summary-list__split">
            <a href="#" class="acg-btn acg-btn--secondary">Download</a>
          </div>
        </div>
      </li>
    </ul>
   </div>
   `;
};

export default {
  title: 'Blocks / Document Summary List'
};
