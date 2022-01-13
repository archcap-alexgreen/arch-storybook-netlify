import { text, boolean } from '@storybook/addon-knobs';

export const Default = () => {
  const accordionTitle = text(
    'Accordion Title',
    'Business Travel Accident Insurance'
  );
  const accordionContent = text(
    'Accordion Content',
    `This is a description paragraph and it tells you about this particular insurance. Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Vestibulum luctus dolor porttitor, pretium dui quis, fringilla libero. 
      Morbi id rhoncus est. Nullam pretium dapibus ullamcorper. 
      Suspendisse potenti. Donec blandit id arcu quis consequat. Vestibulum pharetra varius placerat`
  );

  const accordionOpen = boolean('Open accordion', false);
  const accordionClass = accordionOpen ? 'acg-accordion--open' : '';

  return `<div class="acg-accordion" data-ui="accordion">
      <button class="acg-btn acg-accordion__toggle ${accordionClass}" data-ui="accordion-toggle" aria-controls="content-1" aria-expanded="false" id="accordion-1">
      <h2 class="acg-type-display--tiny is-style-with-border">${accordionTitle}</h2>
      </button>
      <div class="acg-accordion__content" data-ui="accordion-content" aria-hidden="true" id="content-1">
        <p>
        ${accordionContent}
        </p>
      </div>
    </div>
  `;
};

export const condensed = () => {
  const accordionTitle = text(
    'Accordion Title',
    'Business Travel Accident Insurance'
  );
  const accordionContent = text(
    'Accordion Content',
    `This is a description paragraph and it tells you about this particular insurance. Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Vestibulum luctus dolor porttitor, pretium dui quis, fringilla libero. 
      Morbi id rhoncus est. Nullam pretium dapibus ullamcorper. 
      Suspendisse potenti. Donec blandit id arcu quis consequat. Vestibulum pharetra varius placerat`
  );

  const accordionOpen = boolean('Open accordion', true);
  const accordionClass = accordionOpen ? 'acg-accordion--open' : '';

  return `<div class="acg-accordion acg-accordion--condensed" data-ui="accordion">
      <button class="acg-btn acg-accordion__toggle ${accordionClass}" data-ui="accordion-toggle" aria-controls="content-1" aria-expanded="false" id="accordion-1">
      <h2 class="acg-type-body--large">${accordionTitle}</h2>
      </button>
      <div class="acg-accordion__content" data-ui="accordion-content" aria-hidden="true" id="content-1">
        <p>
        ${accordionContent}
        </p>
      </div>
    </div>
  `;
};

export default {
  title: 'Blocks / Accordion'
};
