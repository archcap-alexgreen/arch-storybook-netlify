import { select, text } from '@storybook/addon-knobs';

const contentWidth = {
  Default: '',
  fullWidth: 'acg-hero--full-width'
};

const styleOptions = {
  Overlay: 'acg-hero--style-overlay',
  Slanted: 'acg-hero--style-slanted',
  Homepage: 'acg-hero--style-homepage'
};

const backgroundSlant = {
  Aqua: 'acg-hero--bg-aqua',
  Beige: 'acg-hero--bg-beige',
  Blue: 'acg-hero--bg-blue',
  Green: 'acg-hero--bg-green',
  Orange: 'acg-hero--bg-orange',
  Purple: 'acg-hero--bg-purple',
  Red: 'acg-hero--bg-red',
  Teal: 'acg-hero--bg-teal',
  Yellow: 'acg-hero--bg-yellow'
};

export const All = () => {
  const heroStyle = select('Hero Style', styleOptions, styleOptions.Homepage);
  const title = text('Title', 'Building the Future');
  const lede = text(
    'Lede',
    "Welcome to Arch, a global leader in providing specialty insurance and reinsurance solutions to today's challenges and tomorrow's opportunities."
  );
  const image = text('Background image', 'https://placekitten.com/1200/800');
  const bgSlant = select(
    'Background color',
    backgroundSlant,
    backgroundSlant.Blue
  );

  return `
    <div class="acg-hero ${bgSlant} ${heroStyle}" ${
    heroStyle !== 'acg-hero--style-slanted'
      ? `style="background-image:url(${image})`
      : ''
  }">
        <div class="acg-hero__img" ${
          heroStyle === 'acg-hero--style-slanted'
            ? `style="background-image:url(${image})`
            : ''
        }"></div>
        <div class="acg-hero__wrapper">
            <div class="acg-hero__content">
                <h1 class="acg-hero__heading acg-type-display--large">${title}</h1>
                <p class="acg-hero__subtitle acg-type-display--tiny">
                    ${lede}
                </p>
            </div>
        </div>
    </div>
`;
};

export const Homepage = () => {
  const title = text('Title', 'Building the Future');
  const lede = text(
    'Lede',
    "Welcome to Arch, a global leader in providing specialty insurance and reinsurance solutions to today's challenges and tomorrow's opportunities."
  );
  const image = text('Background image', 'https://placekitten.com/1200/800');
  const bgSlant = select(
    'Background color',
    backgroundSlant,
    backgroundSlant.Blue
  );

  return `
    <div class="acg-hero acg-hero--style-homepage ${bgSlant}" style="background-image:url(${image})">
        <div class="acg-hero__wrapper">
            <div class="acg-hero__content">
                <h1 class="acg-hero__heading acg-type-display--large">${title}</h1>
                <p class="acg-hero__subtitle acg-type-display--tiny">
                   ${lede}
                </p>
            </div>
        </div>
    </div>
`;
};

export const Overlay = () => {
  const eyebrow = text('Eyebrow', 'May 1, 2020');
  const title = text(
    'Title',
    'Prepare for a Hotly Competitive Homebuying Season'
  );
  const heroWidth = select(
    'Content width',
    contentWidth,
    contentWidth.fullWidth
  );
  const image = text('Background image', 'https://placekitten.com/1200/800');
  const bgSlant = select(
    'Background color',
    backgroundSlant,
    backgroundSlant.Blue
  );

  return `
    <div class="acg-hero acg-hero--style-overlay ${heroWidth} ${bgSlant}" style="background-image:url(${image})">
        <div class="acg-hero__wrapper">
            <div class="acg-hero__content">
                <p class="acg-hero__eyebrow acg-type-body--default">${eyebrow}</p>
                <h1 class="acg-hero__heading acg-type-display--large">${title}</h1>
            </div>
        </div>
    </div>
`;
};

export const Slanted = () => {
  const title = text('Title', 'Careers at Arch');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
  );
  const image = text('Background image', 'https://placekitten.com/1200/800');
  const bgSlant = select(
    'Background color',
    backgroundSlant,
    backgroundSlant.Blue
  );

  return `
    <div class="acg-hero acg-hero--style-slanted ${bgSlant}">
        <div class="acg-hero__img" style="background-image:url(${image})"></div>
        <div class="acg-hero__wrapper">
            <div class="acg-hero__content">
                <h1 class="acg-hero__heading acg-type-display--large">${title}</h1>
                <p class="acg-hero__subtitle acg-type-display--tiny">
                ${lede}
                </p>
            </div>
        </div>
    </div>
`;
};
