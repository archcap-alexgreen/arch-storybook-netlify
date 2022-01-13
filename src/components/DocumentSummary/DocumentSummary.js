import { text } from '@storybook/addon-knobs';

export const Default = () => {
  const title = text(
    'Document Summary Title',
    'Business Travel Accident Brochure'
  );
  const excerpt = text(
    'Document Summary Text',
    'The Arch Insurance Accident & Health division provides accident solutions for employer and higher education groups of all sizes.'
  );
  const callToAction = text('Document Summary CTA', 'Download PDF');

  return `
    <div class="acg-doc-summary">
        <i class="acg-icon acg-doc-summary__icon far fa-file-alt fa-w-12"></i>
        <div class="acg-doc-summary__content">
            <h3 class="acg-type-body--default acg-doc-summary__title">${title}</h3>
            <p class="acg-type-body--xsmall">
            ${excerpt}
            </p>
        </div>
        <a href="#" class="acg-doc-summary__btn acg-btn acg-btn--secondary">${callToAction}</a>
    </div>`;
};

export const WithoutExcerpt = () => {
  const title = text(
    'Document Summary Title',
    'Business Travel Accident Brochure'
  );
  const callToAction = text('Document Summary CTA', 'Download PDF');

  return `
    <div class="acg-doc-summary acg-doc-summary--without-excerpt">
        <i class="acg-icon acg-doc-summary__icon far fa-file-alt fa-w-12"></i>
        <div class="acg-doc-summary__content">
            <h3 class="acg-type-body--default acg-doc-summary__title">${title}</h3>
        </div>
        <a href="#" class="acg-doc-summary__btn acg-btn acg-btn--secondary">${callToAction}</a>
    </div>`;
};
