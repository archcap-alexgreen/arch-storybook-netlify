import { select, text } from '@storybook/addon-knobs';

const colors = {
  tealYellow: 'acg-cta--bg-teal-yellow',
  aquaBlue: 'acg-cta--bg-aqua-blue',
  greenBlue: 'acg-cta--bg-green-blue',
  tealBlue: 'acg-cta--bg-teal-blue',
  purpleBlue: 'acg-cta--bg-purple-blue',
  orangeYellow: 'acg-cta--bg-orange-yellow',
  blueGreen: 'acg-cta--bg-blue-green',
  yellowGreen: 'acg-cta--bg-yellow-green'
};

const positions = {
  Left: 'acg-cta--text-left',
  Right: 'acg-cta--text-right'
};

export const Default = () => {
  const ctaHeading = text('CTA Heading', 'We’re a Global Company');
  const ctaText = text(
    'CTA Text',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
  );
  const ctaColor = select('Background Color', colors, colors.tealYellow);
  const ctaPosition = select('Text Position', positions, positions.Left);

  return `
      <div class="acg-cta ${ctaPosition} ${ctaColor}">
        <div class="acg-cta__content__wrapper">
          <div class="acg-cta__content">
            <h3 class="acg-cta__heading">${ctaHeading}</h3>
            <p>${ctaText}</p>
            <a href="#" class="acg-btn acg-btn--primary acg-cta__btn">Learn More</a>
          </div>  
        </div>
        <div class="acg-cta__image" style="background-image: url(https://placekitten.com/400/300)">
        </div>
      </div>`;
};
