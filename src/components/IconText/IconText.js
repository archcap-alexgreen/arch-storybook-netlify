import { text, select } from '@storybook/addon-knobs';
const icons = {
  Flag: 'svg/icon-flag.svg',
  Graph: 'svg/icon-graph.svg',
  Heart: 'svg/icon-heart.svg',
  Lightbulb: 'svg/icon-lightbulb.svg',
  Scale: 'svg/icon-scale.svg'
};

export const Default = () => {
  const blockHeading = text(
    'Text Heading',
    'We embrace the power of teamwork.'
  );
  const blockText = text(
    'Text Description',
    `Everyone contributes and each voice matters. We vigorously 
    support our colleagues and empower them to make a difference. 
    We foster personal and professional growth 
    in ourselves and each other.`
  );
  const imageAlt = text(
    'Image Alt',
    `Image of people raising a flag together.`
  );
  const blockImage = select('Icon Image', icons, icons.Flag);

  return `
    <div class="acg-icon-text">
        <div class="acg-icon-text__icon">
            <img src="${blockImage}" alt="${imageAlt}">
        </div>
        <div class="acg-icon-text__content">
            <h3 class="acg-icon-text__content__heading">${blockHeading}</h3>
            <p class="acg-icon-text__content__desc">
                ${blockText}
            </p>
        </div>
    </div>
`;
};
