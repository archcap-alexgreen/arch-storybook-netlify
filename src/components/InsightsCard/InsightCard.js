import { text } from '@storybook/addon-knobs';
import gridMarkup from './insights-card-grid.html';
import gridMarkupAlt from './insights-card-grid-alt.html';

export const Basic = () => {
  const cardEyebrow = text('Insights Card Eyebrow', 'Label goes here');
  const cardHeading = text('Insights Card Heading', 'Title of Insight #1');
  const cardText = text(
    'Insights Card Text',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing...'
  );

  return `
  <div style="width:360px">
      <div class="acg-card--insights">
        <div class="acg-card__content__wrapper">
          <div class="acg-card--insights__content">
            <p class="acg-card--insights__eyebrow">${cardEyebrow}</p>
            <h3 class="acg-type-display--tiny">${cardHeading}</h3>
            <p class="acg-card--insights__description acg-type-body--small">${cardText}</p>
            <a href="#" class="acg-btn acg-btn--link acg-card--insights__btn">
            Learn More
            <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
      </div>`;
};

export const Featured = () => {
  const cardEyebrow = text('Insights Card Eyebrow', 'Label goes here');
  const cardHeading = text('Insights Card Heading', 'Title of Insight #1');
  const cardText = text(
    'Insights Card Text',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing...'
  );

  return `
    <div class="acg-card--insights acg-card--insights--featured">
      <div class="acg-card__content__wrapper">
        <div class="acg-card--insights__content">
          <p class="acg-card--insights__eyebrow">${cardEyebrow}</p>
          <h3 class="acg-type-display--tiny">${cardHeading}</h3>
          <p class="acg-card--insights__description acg-type-body--small">${cardText}</p>
          <a href="#" class="acg-btn acg-btn--link acg-card--insights__btn">
          Learn More
          <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div class="acg-card--insights__image" style="background-image: url(https://placekitten.com/360/300)">
      </div>
    </div>`;
};

export const FeaturedSecondary = () => {
  const cardEyebrow = text('Insights Card Eyebrow', 'Label goes here');
  const cardHeading = text('Insights Card Heading', 'Title of Insight #1');
  const cardText = text(
    'Insights Card Text',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing...'
  );

  return `
  <div class="acg-card--insights acg-card--insights--featured acg-card--insights--featured-secondary">
    <div class="acg-card__content__wrapper">
      <div class="acg-card--insights__content">
        <p class="acg-card--insights__eyebrow">${cardEyebrow}</p>
        <h3 class="acg-type-display--tiny">${cardHeading}</h3>
        <p class="acg-card--insights__description acg-type-body--small">${cardText}</p>
        <a href="#" class="acg-btn acg-btn--link acg-card--insights__btn">
        Learn More
        <i class="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
    <div class="acg-card--insights__image" style="background-image: url(https://placekitten.com/360/300)">
    </div>
  </div>`;
};

export const Grid = () => gridMarkup;
export const GridAlt = () => gridMarkupAlt;
