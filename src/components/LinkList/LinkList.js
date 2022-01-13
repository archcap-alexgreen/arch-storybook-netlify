import { boolean, select, text } from '@storybook/addon-knobs';
const columns = {
  1: '--one-column',
  2: '--two-column',
  3: '--three-column'
};

export const WithColumns = () => {
  const title = text('Title', 'List Heading');
  const columnClass = select('Number of columns', columns, columns[3]);

  return `
   <div class="acg-link-list__block">
    <h2 class="acg-link-list__title">${title}</h2>
    <ul class="acg-link-list acg-link-list${columnClass}">
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 1</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 2</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 3</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 4</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 5</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 6</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 7</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 8</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 9</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 10</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 11</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 12</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 13</a></li>
    </ul>
   </div>
   `;
};

export const WithBorders = () => {
  const withBordersTitle = text('Title', '');
  const withBordersColumnsClass = select('Columns count', columns, columns[1]);

  return `
  <div class="acg-link-list__block">
    <h2 class="acg-link-list__title">${withBordersTitle}</h2>
    <ul class="acg-link-list acg-link-list${withBordersColumnsClass} acg-link-list--with-borders">
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 1</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 2</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 3</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 4</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 5</a></li>
      <li class="acg-link-list__item"><a href="#" class="acg-link-list__item__link">Link 6</a></li>
    </ul>
   </div>
   `;
};

export const WithDates = () => {
  const withBorders = boolean('With borders', false);
  const withBordersClass = withBorders ? 'acg-link-list--with-borders' : '';

  return `
    <ul class="acg-link-list ${withBordersClass}">
      <li class="acg-link-list__item">
        <time class="acg-link-list__item__date" datetime="2020-07-29">07/29/2020</time>
        <a href="#" class="acg-link-list__item__link">Arch Capital Group Ltd. Reports 2020 Second Quarter Results</a>
      </li>
      <li class="acg-link-list__item">
        <time class="acg-link-list__item__date" datetime="2020-05-04">05/04/2020</time>
        <a href="#" class="acg-link-list__item__link">Arch Capital Group Ltd. Reports 2020 First Quarter Results</a>
      </li>
      <li class="acg-link-list__item">
        <time class="acg-link-list__item__date" datetime="2020-02-11">02/11/2020</time>
        <a href="#" class="acg-link-list__item__link">Arch Capital Group Ltd. Reports 2019 Fourth Quarter Results</a>
      </li>
      <li class="acg-link-list__item">
        <time class="acg-link-list__item__date" datetime="2019-10-29">10/29/2019</time>
        <a href="#" class="acg-link-list__item__link">Arch Capital Group Ltd. Reports 2019 Third Quarter Results</a>
      </li>
      <li class="acg-link-list__item">
        <time class="acg-link-list__item__date" datetime="2019-07-29">07/29/2019</time>
        <a href="#" class="acg-link-list__item__link">ARCH Capital Group Ltd. Reports 2019 Second Quarter Results</a>
      </li>
    </ul>
   `;
};
