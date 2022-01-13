import { text } from '@storybook/addon-knobs';

export const main = () => {
  const image =
    'https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
  const eventImage = text('Event image', image);
  const eventTime = text('Event time', 'Friday, May 8, 2020 12:00 PM ET');
  const eventTitle = text('Event title', 'Annual Shareholder Meeting');
  const eventDetail = text('Event detail', 'Event Details: Conference Call');
  const eventSummary = text(
    'Event summary',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.'
  );
  const eventCTA = text('Event CTA', 'Learn more');

  return `
  <div class="acg-event">
    <div class="acg-event__image-wrapper">
      <img class="acg-event__image" alt="Event image" src=${eventImage} />
    </div>
    <div class="acg-event__content">
      <time class="acg-event__content__time">${eventTime}</time>
      <h2 class="acg-event__content__title">${eventTitle}</h2>
      <p class="acg-event__content__detail">${eventDetail}</p>
      <p class="acg-event__content__summary">${eventSummary}</p>
      <a class="acg-event__content__cta acg-btn acg-btn--link" href="#">
      ${eventCTA}<i class="acg-icon fas fa-chevron-right"></i>
      </a>
    </div>
  </div>`;
};

export const grid = () => {
  return `
  <div class="acg-event-grid">
    <div class="acg-event acg-event--featured">
      <div class="acg-event__image-wrapper">
        <img class="acg-event__image" alt="Event image" src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=370" />
      </div>
      <div class="acg-event__content">
        <time class="acg-event__content__time">Friday, May 8, 2020 12:00 PM ET</time>
        <h2 class="acg-event__content__title">Annual Shareholder Meeting</h2>
        <p class="acg-event__content__detail">Event Details: Conference Call</p>
        <p class="acg-event__content__summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
      </div>
    </div>
    <div class="acg-event-grid__list">
    <div class="acg-event">
      <div class="acg-event__content">
        <time class="acg-event__content__time">Wednesday, May 26, 2020 - Friday, May 27, 2020</time>
        <h2 class="acg-event__content__title">10th Annual Global Financial Services Conference</h2>
        <p class="acg-event__content__detail">Host Company: Deutsche Bank Securities Inc.</p>
      </div>
    </div>
    <div class="acg-event">
      <div class="acg-event__content">
        <time class="acg-event__content__time">Wednesday, May 20, 2020 - Thursday, May 21, 2020</time>
        <h2 class="acg-event__content__title">2020 Wells Fargo Virtual Financial Services Investor Forum</h2>
        <p class="acg-event__content__detail">Host Company: Wells Fargo Securities LLC</p>
        <p class="acg-event__content__detail">Conference Type: Investor</p>
        <p class="acg-event__content__detail">Location: JW Marriott Chicago Chicago, IL</p>
      </div>
    </div>
    <div class="acg-event">
      <div class="acg-event__content">
        <time class="acg-event__content__time">Wednesday, May 20, 2020 - Thursday, May 21, 2020</time>
        <h2 class="acg-event__content__title">2020 Wells Fargo Virtual Financial Services Investor Forum</h2>
        <p class="acg-event__content__detail">Host Company: RBC Capital Markets LLC</p>
        <p class="acg-event__content__detail">Conference Type: Investor</p>
        <p class="acg-event__content__detail">Location: InterContinental NY Barclay New York, NY</p>
      </div>
    </div>
    </div>
  </div>
  `;
};

export const list = () => {
  return `
  <div class="acg-event-list">
    <div class="acg-event">
      <div class="acg-event__image-wrapper">
        <img class="acg-event__image" alt="Event image" src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=370" />
      </div>
      <div class="acg-event__content">
        <time class="acg-event__content__time">Friday, May 8, 2020 12:00 PM ET</time>
        <h2 class="acg-event__content__title">Annual Shareholder Meeting</h2>
        <p class="acg-event__content__detail">Event Details: Conference Call</p>
        <p class="acg-event__content__summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
      </div>
    </div>
    <div class="acg-event">
      <div class="acg-event__image-wrapper">
        <img class="acg-event__image" alt="Event image" src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=370" />
      </div>
      <div class="acg-event__content">
        <time class="acg-event__content__time">Wednesday, May 26, 2020 - Friday, May 27, 2020</time>
        <h2 class="acg-event__content__title">10th Annual Global Financial Services Conference</h2>
        <p class="acg-event__content__detail">Host Company: Deutsche Bank Securities Inc.</p>
      </div>
    </div>
    <div class="acg-event">
      <div class="acg-event__image-wrapper">
        <img class="acg-event__image" alt="Event image" src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=370" />
      </div>
      <div class="acg-event__content">
        <time class="acg-event__content__time">Wednesday, May 20, 2020 - Thursday, May 21, 2020</time>
        <h2 class="acg-event__content__title">2020 Wells Fargo Virtual Financial Services Investor Forum</h2>
        <p class="acg-event__content__detail">Host Company: Wells Fargo Securities LLC</p>
        <p class="acg-event__content__detail">Conference Type: Investor</p>
        <p class="acg-event__content__detail">Location: JW Marriott Chicago Chicago, IL</p>
      </div>
    </div>
    <div class="acg-event">
      <div class="acg-event__image-wrapper">
        <img class="acg-event__image" alt="Event image" src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=370" />
      </div>
      <div class="acg-event__content">
        <time class="acg-event__content__time">Wednesday, May 20, 2020 - Thursday, May 21, 2020</time>
        <h2 class="acg-event__content__title">2020 Wells Fargo Virtual Financial Services Investor Forum</h2>
        <p class="acg-event__content__detail">Host Company: RBC Capital Markets LLC</p>
        <p class="acg-event__content__detail">Conference Type: Investor</p>
        <p class="acg-event__content__detail">Location: InterContinental NY Barclay New York, NY</p>
      </div>
    </div>
  </div>
  `;
};

export default {
  title: 'Blocks / Event'
};
