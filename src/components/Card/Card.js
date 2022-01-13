import { text, select, boolean } from '@storybook/addon-knobs';
const color = {
  Aqua: 'aqua',
  Beige: 'beige',
  Blue: 'blue',
  Green: 'green',
  Orange: 'orange',
  Purple: 'purple',
  Red: 'red',
  Teal: 'teal',
  Yellow: 'yellow'
};

export const Summary = () => {
  const blockHeading = text('Text Heading', 'Insurance');
  const blockText = text(
    'Text Description',
    `Everyone contributes and each voice matters. We vigorously 
    support our colleagues and empower them to make a difference. 
    We foster personal and professional growth 
    in ourselves and each other.`
  );
  const hasBorder = boolean('Has Border?', false);
  const borderColor = select('Border Color', color, color.Blue);
  const isFeatured = boolean('Featured Style Card?', true);

  const borderClass = hasBorder ? 'acg-card--border' : '';
  const featuredClass = isFeatured ? 'acg-card--featured' : '';

  return `
    <div class="acg-card ${featuredClass} ${borderClass} acg-card--border--${borderColor}" style="max-width: 390px">
        <div class="acg-card__content">
            <h3 class="acg-card__heading">${blockHeading}</h3>
            <p class="acg-card__desc">
                ${blockText}
            </p>
            <a href="#" class="acg-card__btn acg-btn acg-btn--link">
              Visit Arch Insurance
              <i class="acg-icon fas fa-chevron-right"></i>
            </a>
        </div>
    </div>
`;
};

export const Location = () => {
  const blockHeading = text('Text Heading', 'Location Name');
  const blockFunction = text('Location Function', `Primary function`);
  const blockAddress = text(
    'Location Address',
    `1111 Street Road Lane
    Philadelphia, PA 10932`
  );

  const blockPhone = text('Location Phone Number', `(610) 420-4964`);

  return `
    <div class="acg-card acg-card--location" style="max-width: 360px">
        <div class="acg-card__content">
            <h3 class="acg-card__heading">${blockHeading}</h3>
            <p class="acg-card__desc">${blockFunction}</p>
            <p class="acg-card__desc">${blockAddress}</p>
            <p class="acg-card__desc acg-card__desc--phone">${blockPhone}</p>
        </div>
        <a href="#" class="acg-card__btn acg-btn acg-btn--link">
            View
            <i class="acg-icon fas fa-chevron-right"></i>
        </a>
    </div>
`;
};

export const Product = () => {
  const blockEyebrow = text('Text Eyebrow', 'Product Label');
  const blockHeading = text('Text Heading', 'Disability Insurance');
  const blockDescription = text(
    'Description',
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod…`
  );
  const featured = boolean('Featured?', false);

  return `
    <div class="acg-card acg-card--product ${
      featured && 'acg-card--product--featured'
    }" style="max-width: 650px">
      <div class="acg-card__image" style="background-image:url(https://placekitten.com/600/600)">
      </div>    
      <div class="acg-card__content">
            <p class="acg-card__eyebrow">${blockEyebrow}</p>
            <h3 class="acg-card__heading">${blockHeading}</h3>
            <p class="acg-card__desc">${blockDescription}</p>
            <a href="#" class="acg-card__btn acg-btn acg-btn--link">
                Learn More
                <i class="acg-icon fas fa-chevron-right"></i>
            </a>
        </div>
        
    </div>
`;
};

export const LinkList = () => {
  const blockHeading = text('Text Heading', 'Insurance');

  return `
    <div class="acg-card acg-card--featured acg-card--link-list" style="max-width: 390px">
        <div class="acg-card__content">
            <h3 class="acg-card__heading">${blockHeading}</h3>
            <ul class="acg-lined-list">
              <li>
                <a href="#">RateStar Quote</a>
              </li>
              <li>
                <a href="#">Master Policy Information Center</a>
              </li>
              <li>
                <a href="#">Find your account Manager</a>
              </li>
              <li>
                <a href="#">Underwriting Guidelines</a>
              </li>
              <li>
                <a href="#">Form &  Application Links</a>
              </li>
              <li>
                <a href="#">Loan Status Lookup</a>
              </li>
            </ul>
        </div>
    </div>
`;
};

export const Contact = () => {
  const blockEyebrow = text('Text Eyebrow', 'Corporate Contact');
  const blockName = text('Text Name', 'Tim Dodge');
  const blockBorderStyle = boolean('Add Border Style', false);
  const blockTitle = text(
    'Title',
    'Vice President of Marketing, Travel and Accident'
  );
  const blockPhone = text('Phone Number', '1-444-333-3322');
  const blockEmail = text('Email Address', 'Timdodge@archinsurance.com');

  return `
    <div class="acg-card acg-card--contact ${
      blockBorderStyle && 'acg-card--contact--border'
    }" style="max-width: 550px">   
      <div class="acg-card__image" style="background-image: url(https://placekitten.com/200/200)">
      </div>
      <div class="acg-card__content">
            <p class="acg-card__eyebrow">${blockEyebrow}</p>
            <h3 class="acg-card__heading">${blockName}</h3>
            <p class="acg-card__desc">${blockTitle}</p>
            <div class="acg-card__meta">
              <p class="acg-card__meta__item">
                <i class="acg-icon fas fa-phone"></i>
                ${blockPhone}
              </p>
              <p class="acg-card__meta__item">
                <i class="acg-icon fas fa-envelope"></i>
                ${blockEmail}
              </p>
            </div>
        </div>
      </div>
      `;
};

export const Container = () => {
  const blockHeading = text('Title Text', 'Locations Based on Search');
  const hasTitle = boolean('Show Card Container title', true);

  return `
  <div class="acg-card acg-card--container acg-card--locations">
      ${hasTitle ? `<h3 class="acg-card__title">${blockHeading}</h3>` : ''}
      <div class="acg-card__content">
      <div class="acg-card acg-card--location">
        <div class="acg-card__content">
          <h3 class="acg-card__heading">Boston MA</h3>
          <p class="acg-card__desc">Arch Capital Services Inc.</p>
          <div class="acg-card__desc">
            <p>99 High Street, 8th Floor</p>
            <p>Boston, MA 02110</p>
          </div>
          <p class="acg-card__desc acg-card__desc--phone">1 617 419 2900</p>
        </div>
        <a href="#" class="acg-card__btn acg-btn acg-btn--link"> View <i class="acg-icon fas fa-chevron-right"></i> </a>
      </div>
    
      <div class="acg-card acg-card--location">
        <div class="acg-card__content">
          <h3 class="acg-card__heading">Boston MA</h3>
          <p class="acg-card__desc">Arch Reinsurance Facultative</p>
          <div class="acg-card__desc">
            <p>99 High Street, 8th Floor</p>
            <p>Boston, MA 02110</p>
          </div>
          <p class="acg-card__desc acg-card__desc--phone">1 617 419 2931</p>
        </div>
        <a href="#" class="acg-card__btn acg-btn acg-btn--link"> View <i class="acg-icon fas fa-chevron-right"></i> </a>
      </div>
    
      <div class="acg-card acg-card--location">
        <div class="acg-card__content">
          <h3 class="acg-card__heading">Charlotte NC</h3>
          <p class="acg-card__desc">Arch Capital Services Inc.</p>
          <div class="acg-card__desc">
            <p>
              14045 Ballantyne Corp. Place,<br />
              Suite 160<br />
              Charlotte, NC 28277
            </p>
          </div>
          <p class="acg-card__desc acg-card__desc--phone">1 914 872 3600</p>
        </div>
        <a href="#" class="acg-card__btn acg-btn acg-btn--link"> View <i class="acg-icon fas fa-chevron-right"></i> </a>
      </div>
    
      <div class="acg-card acg-card--location">
        <div class="acg-card__content">
          <h3 class="acg-card__heading">Dublin</h3>
          <p class="acg-card__desc">Arch Reinsurance Europe Underwriting Designated Activity Company</p>
          <div class="acg-card__desc">
            <p>
              Level 2, Block 3, The Oval<br />
              160 Shelbourne Road<br />
              Ballsbridge, Dublin 4<br />
              Ireland
            </p>
          </div>
          <p class="acg-card__desc acg-card__desc--phone">+353 1 669 9700</p>
        </div>
        <a href="#" class="acg-card__btn acg-btn acg-btn--link"> View <i class="acg-icon fas fa-chevron-right"></i> </a>
      </div>
    
      <div class="acg-card acg-card--location">
        <div class="acg-card__content">
          <h3 class="acg-card__heading">Sydney</h3>
          <p class="acg-card__desc">Arch LMI</p>
          <div class="acg-card__desc">
            <p>
              175 Pitt Street, Suite 1, Level 11<br />
              Sydney, NSW 2000<br />
              Australia
            </p>
          </div>
          <p class="acg-card__desc acg-card__desc--phone">+353 1 669 9700</p>
        </div>
        <a href="#" class="acg-card__btn acg-btn acg-btn--link"> View <i class="acg-icon fas fa-chevron-right"></i> </a>
      </div>
    
      <div class="acg-card acg-card--location">
        <div class="acg-card__content">
          <h3 class="acg-card__heading">Walnut Creek, CA</h3>
          <p class="acg-card__desc">Arch Mortgage Insurance Company</p>
          <div class="acg-card__desc">
            <p>
              PMI Plaza<br />
              3003 Oak Road<br />
              Walnut Creek, CA 94597
            </p>
          </div>
          <p class="acg-card__desc acg-card__desc--phone">1 800 909 4264</p>
        </div>
        <a href=#" class="acg-card__btn acg-btn acg-btn--link"> View <i class="acg-icon fas fa-chevron-right"></i> </a>
      </div>
    
      <div class="acg-card acg-card--location">
        <div class="acg-card__content">
          <h3 class="acg-card__heading">White Plains NY</h3>
          <p class="acg-card__desc">Arch Capital Services Inc.</p>
          <div class="acg-card__desc">
            <p>
              360 Hamilton Avenue<br />
              Suite 600<br />
              White Plains, NY
            </p>
          </div>
          <p class="acg-card__desc acg-card__desc--phone">1 914 872 3600</p>
        </div>
        <a href="#" class="acg-card__btn acg-btn acg-btn--link"> View <i class="acg-icon fas fa-chevron-right"></i> </a>
      </div>
    </div>      
  </div>
`;
};
