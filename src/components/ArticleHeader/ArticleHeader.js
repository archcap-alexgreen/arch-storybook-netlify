import { text, array, number } from '@storybook/addon-knobs';

export const Main = () => {
  const authorName = text('Author Name', `Bill Murray`);
  const imgSrc = text('Image src', `https://www.fillmurray.com/200/200`);
  const authorTitle = text('Author Title', `Chief Underwriting Officer`);
  const wordCount = number('Word Count', 1000, {
    range: true,
    min: 0,
    max: 4000,
    step: 200
  });
  // This is faking for Storybook's purposes, but the component does this on page load.
  const updateMinutes = () => wordCount / 200;
  const tags = array('Tags', ['Economic and Housing', 'Market Update'], ', ');

  return `
    <div class="acg-article-header">
      <div class="acg-article-header__item acg-author">
        <div class="acg-author__avatar">
          <img src="${imgSrc}" alt="Profile photo"/>
        </div>
        <div class="acg-author__details">
          <h3 class="acg-author__name">${authorName}</h3>
          <p class="acg-author__title">
          ${authorTitle}
          </p>
        </div>
      </div>
      <div class="acg-article-header__item acg-article-header__read" data-ui="read-time" data-word-count="${wordCount}">
        <p><span class="acg-article-header__minutes" data-ui="read-minutes">${updateMinutes()}</span> Minute Read</p>
      </div>
      <div class="acg-article-header__item acg-article-header__tags"><p>${tags.map(
        tag => ` <a href="#">${tag}</a>`
      )}</p></div>
      <div class="acg-article-header__item acg-article-header__sharing">
        <ul class="acg-social-sharing">
          <li class="acg-social-sharing__list">
            <a href="#">
              <i class="fab fa-twitter"></i>
              <span class="acg-accessibly-hidden">Twitter</span>
            </a>
          </li>
          <li class="acg-social-sharing__list"> 
            <a href="#">
              <i class="fab fa-linkedin"></i>
              <span class="acg-accessibly-hidden">LinkedIn</span>
            </a>
          </li>
          <li class="acg-social-sharing__list">
            <a href="#">
              <i class="fab fa-facebook-square"></i>
              <span class="acg-accessibly-hidden">Facebook</span>
            </a>
          </li>
          <li class="acg-social-sharing__list">
            <a href="#">
              <i class="fas fa-download"></i>
              <span class="acg-accessibly-hidden">Download</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
`;
};
