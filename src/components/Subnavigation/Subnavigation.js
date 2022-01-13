import { select } from '@storybook/addon-knobs';

export const Default = () => {
  const alignment = {
    Left: 'acg-subnav--align-left',
    Center: 'acg-subnav--align-center',
    Right: 'acg-subnav--align-right'
  };
  const alignClass = select('Align', alignment, alignment.Left);

  return `
  <div class="acg-subnav__wrapper">
    <ul class="acg-subnav ${alignClass}">
      <li class="acg-subnav__item acg-subnav__item--current">
        <a href="#" class="acg-subnav__link">Overview</a>
      </li>
      <li class="acg-subnav__item">
        <a href="#" class="acg-subnav__link">Responsibility & Sustainability</a>
      </li>
      <li class="acg-subnav__item">
        <a href="#" class="acg-subnav__link">Employee Investment</a>
      </li>
      <li class="acg-subnav__item">
        <a href="#" class="acg-subnav__link">Community Involvement</a>
      </li>
      <li class="acg-subnav__item">
        <a href="#" class="acg-subnav__link">Diversity</a>
      </li>
    </ul>
    </div>
  `;
};
