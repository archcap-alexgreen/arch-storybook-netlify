import { text } from '@storybook/addon-knobs';

export const Default = () => {
  const modalTitle = text(
    'Modal Title',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit'
  );
  const modalBody = text(
    'Modal Body',
    'Dolore temporibus neque voluptatem explicabo aspernatur natus ipsum! Unde consequuntur enim laudantium, voluptatum error dolore, nisi veritatis a nemo facere quisquam! Velit. Irure aliqua aute incididunt sit ullamco do do. Adipisicing velit proident incididunt culpa eiusmod. Dolor nostrud irure adipisicing in ex voluptate veniam sint magna nostrud. Nostrud quis aute ad do laborum ea et velit incididunt sint. Enim ut adipisicing ad sit eiusmod mollit deserunt elit incididunt. Sit adipisicing nostrud esse cillum et et in duis sit. Do sint ipsum sit sint ea ipsum tempor aliquip.'
  );

  return `
  <div class="acg-modal" role="dialog" aria-labelledby="modal-title" aria-hidden="false">
    <div class="acg-modal__wrapper" role="document">
      <div class="acg-modal__header">
        <h2 id="modal-title" class="acg-modal__title acg-type-display--small">${modalTitle}</h2>
        <button class="acg-modal__close acg-btn" aria-label="Close modal" type="button" data-ui="modal-close">
          <i class="fas fa-times"></i>
          <span class="acg-accessibly-hidden">Close</span>
        </button>
      </div>
      <div class="acg-modal__body">
        ${modalBody}
      </div>
    </div>
  </div>
  <div class="acg-modal__overlay" tabindex="-1"></div>
  `;
};

export const WithPeople = () => {
  const image =
    'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.8&w=275&h=350&q=80';
  const profileImage = text('Profile Image', image);
  const profileName = text('Profile Name', 'Ollie Nelson');
  const profileTitle = text(
    'Profile Title',
    'Assistant to the Regional Manager | Northeast'
  );
  const profileDescription = text(
    'Profile Description',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore temporibus neque voluptatem explicabo aspernatur natus ipsum! Unde consequuntur enim laudantium, voluptatum error dolore, nisi veritatis a nemo facere quisquam! Velit.'
  );
  const profilePhone = text('Profile Phone', '1-444-222-1234');
  const profileEmail = text('Profile Email', 'ollie.nelson@archinsurance.com');

  return `
  <div class="acg-modal acg-modal--people" role="dialog" aria-labelledby="modal-title" aria-hidden="false">
    <div class="acg-modal__wrapper" role="document">
      <div class="acg-modal__header">
        <button class="acg-modal__close acg-btn" aria-label="Close modal" type="button" data-ui="modal-close">
          <i class="fas fa-times"></i>
          <span class="acg-accessibly-hidden">Close</span>
        </button>
      </div>
      <div class="acg-modal__body" tabindex="0">
        <div class="acg-profile">
          <div class="acg-profile__image-wrapper">
            <img class="acg-profile__image" alt="Profile image" src=${profileImage} />
            <div class="acg-profile__contact">
              <ul class="acg-profile__contact-info">
                <li><i class="acg-icon fas fa-phone" aria-label="Phone icon"></i> ${profilePhone}</li>
                <li><i class="acg-icon fas fa-envelope" aria-label="E-mail icon"></i> <a href="#">${profileEmail}</a></li>
                <li><i class="acg-icon fab fa-linkedin-in" aria-label="LinkedIn icon"></i> <a href="#">Connect on LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div class="acg-profile__detail">
            <h2 class="acg-profile__name acg-type-display--small" id="modal-title">${profileName}</h2>
            <h3 class="acg-profile__title">${profileTitle}</h3>
            <p class="acg-profile_description">${profileDescription}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="acg-modal__overlay" tabindex="-1"></div>
  `;
};

export const WithImplementation = () =>
  `
  <div data-ui="modal-trigger-wrapper">
  <button class="acg-btn--primary acg-btn" data-ui="modal-trigger" aria-controls="modal-message" type="button">Open Modal</button>
    <div id="modal-message" class="acg-modal" role="dialog" aria-labelledby="modal-title" aria-hidden="true">
    <div class="acg-modal__wrapper" role="document">
      <div class="acg-modal__header">
        <h2 id="modal-title" class="acg-modal__title acg-type-display--small">Modal Title Required</h2>
        <button class="acg-modal__close acg-btn" aria-label="Close modal" type="button" data-ui="modal-close">
          <i class="fas fa-times"></i>
          <span class="acg-accessibly-hidden">Close</span>
        </button>
      </div>
      <div class="acg-modal__body">
        Stuff and things <a href="#">Link for testing focus trap</a>
      </div>
    </div>
  </div>
  <div class="acg-modal__overlay" tabindex="-1"></div>
  </div>
  `;

export default {
  title: 'Components / Modal'
};
