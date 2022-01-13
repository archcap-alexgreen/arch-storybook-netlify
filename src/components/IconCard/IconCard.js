import { text, select, boolean } from '@storybook/addon-knobs';

const icons = {
  Home: 'svg/hbe-icon-blue.svg',
  Grad: 'svg/training-icon-blue.svg',
  MapPin: 'svg/roadmap-icon-blue.svg'
};

const ctaTypes = {
  Button: 'acg-btn--primary',
  Link: 'acg-btn--link',
  Links2: 'acg-btn--link acg-btn--link__double'
};

export const Default = () => {
  const cardHeading = text('Text Heading', 'Homebuyer Education');
  const cardText = text(
    'Text Description',
    `Get access to GSE-approved pre-purchase programs for borrowers financing their home purchases with loans that include MI.`
  );
  const cardIcon = select('Icon', icons, icons.Home);
  const cardCta = select('CTA Type', ctaTypes, ctaTypes.Button);
  const hasBorder = boolean('Has Border?', true);
  const hasShadow = boolean('Has Shadow?', false);

  const borderClass = hasBorder ? 'acg-card__container--border' : '';
  const shadowClass = hasShadow ? 'acg-card__container--shadow' : '';

  return `
    <div class="acg-card__icon ${borderClass} ${shadowClass}" style="max-width: 360px">
      <div class="acg-card__image-container">
        <img src="${cardIcon}" alt="Description of icon" class="acg-card__image">
      </div>
      <div class="acg-card__content">
        <h3 class="acg-card__heading">${cardHeading}</h3>
        <p class="acg-type-body">${cardText}</p>
      </div>
      <div class="acg-card__cta">
        <a href="#" class="acg-btn ${cardCta}">Learn More</a>

        ${
          cardCta === 'acg-btn--link acg-btn--link__double'
            ? `<a href="#" class="acg-btn ${cardCta}">Learn More</a>`
            : ''
        }
      </div>
    </div>
`;
};
