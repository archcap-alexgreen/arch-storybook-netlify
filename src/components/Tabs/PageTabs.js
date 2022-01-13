import { select } from '@storybook/addon-knobs';

const tabAlignOptions = ['', 'left', 'right'];

export const Default = () => {
  const tabAlignment = select('Tabs alignment', tabAlignOptions, '');

  return `<ul class="acg-tabs ${
    tabAlignment ? `acg-tabs--${tabAlignment}` : ''
  }" role="tablist" data-ui="tabs">
  <li class="acg-tab--active acg-tab" role="presentation">
    <a
      id="how-it-works-tab"
      href="#how-it-works"
      role="tab"
      aria-controls="how-it-works"
      aria-selected="true"
      >How it works</a
    >
  </li>
  <li class="acg-tab" role="presentation">
    <a
      id="how-to-submit-tab"
      href="#how-to-submit"
      role="tab"
      aria-controls="how-to-submit"
      tabindex="-1"
      >How to Submit</a
    >
  </li>
  <li class="acg-tab" role="presentation">
    <a
      id="review-process-tab"
      href="#review-process"
      role="tab"
      aria-controls="review-process"
      tabindex="-1"
      >Review Process</a
    >
  </li>
  <li class="acg-tab" role="presentation">
    <a
      id="interpretting-results-tab"
      href="#interpretting-results"
      role="tab"
      aria-controls="interpretting-results"
      tabindex="-1"
      >Interpreting Results</a
    >
  </li>
</ul>
<section id="how-it-works" class="acg-tab__content acg-tab__content--active" role="tabpanel" aria-labelledby="how-it-works-tab">
  How it Works content goes here
</section>
<section id="how-to-submit" class="acg-tab__content" role="tabpanel" aria-labelledby="how-to-submit-tab" hidden>
  How to Submit content goes here
</section>
<section id="review-process" class="acg-tab__content" role="tabpanel" aria-labelledby="review-process-tab" hidden>
  Review Process content goes here
</section>
<section id="interpretting-results" class="acg-tab__content" role="tabpanel" aria-labelledby="interpretting-results-tab" hidden>
  Interpretting Results content goes here
</section>`;
};
