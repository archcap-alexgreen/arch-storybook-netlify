import { text } from '@storybook/addon-knobs';
import { Default as globalNav } from '../GlobalNavigation/GlobalNavigation';

export const Default = () => {
  const alertText = text(
    'Alert Text',
    'This is where an alert goes. It goes here. A whole alert can fit here and tell you really great alert things.'
  );

  return `
    <div class="acg-alert" role="dialog" aria-hidden="false" aria-live="polite" data-ui="alert">
      <div class="acg-alert--container">
        <div class="acg-alert__content-wrapper">
          <div class="acg-alert__content">
              <p>${alertText}</p>
          </div>
          <div class="acg-alert__actions"><a href="#">Call to Action link</a></div>
        </div>
        <button class="acg-alert__close acg-btn" aria-label="Close alert" type="button" data-ui="alert-close">
          <i class="fas fa-times"></i>
          <span class="acg-accessibly-hidden">Close</span>
        </button>
      </div>
    </div>
`;
};

export const Implementation = () => {
  const alertText = text(
    'Alert Text',
    'This is where an alert goes. It goes here. A whole alert can fit here and tell you really great alert things.'
  );

  return `
    <div class="acg-alert" role="dialog" aria-hidden="false" aria-live="polite" data-ui="alert">
      <div class="acg-alert--container">
        <div class="acg-alert__content-wrapper">
          <div class="acg-alert__content">
              <p>${alertText}</p>
          </div>
          <div class="acg-alert__actions"><a href="#">Call to Action link</a></div>
        </div>
        <button class="acg-alert__close acg-btn" aria-label="Close alert" type="button" data-ui="alert-close">
          <i class="fas fa-times"></i>
          <span class="acg-accessibly-hidden">Close</span>
        </button>
      </div>
    </div>
    ${globalNav()}
`;
};
