import { text, number } from '@storybook/addon-knobs';

export const PersonGrid = () => {
  const personImage = text('Person Image', 'http://place-puppy.com/260x360');
  const personName = text('Person Name', 'Ollie Nelson');
  const personTitle = text('Person Title', 'Title');
  const personRegion = text('Person Region', 'Region');
  const numberPeople = number('Number of People', 4, { min: 1, max: 8 });

  const personMarkup = () => {
    let people = '';

    for (let n = 0; n < numberPeople; n++) {
      people += `
      <div class="acg-person">
      <div class="acg-person__image">
        <img src="${personImage}" alt="${personName}">
      </div>
      <div class="acg-person__info">
        <h3 class="acg-person__name">${personName}</h3>
        <ul class="acg-person__meta">
        <li class="acg-person__title">
        ${personTitle}
        </li>
        <li class="acg-person__region">
        ${personRegion}
        </li>
        </ul>
        <button href="#" class="acg-btn acg-btn--link">Read More</button>
      </div>
    </div>`;
    }
    return people;
  };

  return `
  <div class="acg-person__grid__wrapper">
  <div class="acg-person__grid">
  ${personMarkup()}
  </div>
  <div class="acg-person__link">
    <a href="#" class="acg-btn acg-btn--primary">See More People</a>
  </div>
  </div>`;
};

export const ProductGrid = () => {
  const blockEyebrow = text('Text Eyebrow', 'Product Label');
  const blockHeading = text('Text Heading', 'Disability Insurance');
  const blockDescription = text(
    'Description',
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod…`
  );

  return `
  <div class="acg-wrapper">
  <div class="acg-product-grid">
    <div class="acg-card acg-card--product  acg-card--product--featured">
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
    <div class="acg-card acg-card--product">
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
    <div class="acg-card acg-card--product">
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
  </div>
  <div class="acg-product-grid__button">
    <a href="#" class="acg-btn acg-btn--primary">View More Products</a>
  </div>
</div>
`;
};

export const ProductGridAlt = () => {
  const blockHeading = text(
    'Text Heading',
    'Accidental Death & Dismemberment Insurance'
  );
  const blockDescription = text(
    'Description',
    `Accidental Death and Dismemberment (AD&D) insurance provides coverage for tragic events that may result in severe injury or loss of life.`
  );
  const productCount = number('Number of products', 1, { min: 1, max: 7 });

  const productMarkup = () => {
    let product = '';

    for (let n = 0; n < productCount; n++) {
      product += `
        <div class="acg-card acg-card--product">
          <div class="acg-card__image">
            <img src="https://placekitten.com/1600/900" class="acg-card-image acg-card-image__product" alt="Image description">
          </div>
          <div class="acg-card__content acg-card__content-product">
            <h3 class="acg-card__heading">${blockHeading}</h3>
            <p class="acg-card__desc">${blockDescription}</p>
            <a href="#" class="acg-card__btn acg-btn acg-btn--link">Learn More <i class="acg-icon fas fa-chevron-right"></i></a>
          </div>
        </div>
      `;
    }
    return product;
  };

  return `
  <div class="acg-wrapper">
    <div class="acg-product-grid--alt acg-product-grid--${productCount}">
      ${productMarkup()}
    </div>
    <div class="acg-product-grid__button">
      <a href="#" class="acg-btn acg-btn--primary">View More Products</a>
    </div>
  </div>
`;
};

export const FeaturedContentGrid = () => {
  const blockEyebrow = text(
    'Text Eyebrow',
    'PolicyCast | February 10, 2021 by Kirk Willison'
  );
  const blockHeading = text(
    'Text Heading',
    'Helping Homebuyers Become “House Rich”'
  );
  const featureBlockDescription = text(
    'Description (featured)',
    `Owning a home is one of the biggest drivers of wealth creation, and it’s a topic many homebuyers don’t hear enough about...`
  );

  const blockDescription = text(
    'Description',
    `Legal expert Jeffrey P. Naimon discusses fair housing rules and other likely regulatory changes on Arch MI’s PolicyCast video...`
  );

  return `
  <div class="acg-wrapper">
  <div class="acg-featured-content-grid">
    <div class="acg-card acg-card--featured-content  acg-card--featured-content--featured">
      <div class="acg-card__image">
        <img src="https://placekitten.com/1600/900" alt="A cat" class="acg-card-image acg-card-image--featured" />
      </div>
      <div class="acg-card__content">
        <p class="acg-card__eyebrow">${blockEyebrow}</p>
        <h3 class="acg-card__heading">${blockHeading}</h3>
        <p class="acg-card__desc">${featureBlockDescription}
          <a href="#" class="acg-card__btn acg-btn acg-btn--link">
            Learn More
            <i class="acg-icon fas fa-chevron-right"></i>
          </a>
        </p>
      </div>
    </div>
    <div class="acg-card acg-card--featured-content">
      <div class="acg-card__image">
        <img src="https://placekitten.com/1600/900" alt="A cat" class="acg-card-image" />
      </div>
      <div class="acg-card__content">
        <p class="acg-card__eyebrow">Maintains aspect ratio while filling 1:1 container</p>
        <h3 class="acg-card__heading">This cat is 16:9.</h3>
        <p class="acg-card__desc">The other images are 1:1, and will grow in height to accommodate content that may be a bit longer
          <a href="#" class="acg-card__btn acg-btn acg-btn--link">
            Learn More
            <i class="acg-icon fas fa-chevron-right"></i>
          </a>
        </p>
      </div>
    </div>
    <div class="acg-card acg-card--featured-content">
      <div class="acg-card__image">
        <img src="https://placekitten.com/600/600" alt="A cat" class="acg-card-image" />
      </div>
      <div class="acg-card__content">
        <p class="acg-card__eyebrow">${blockEyebrow}</p>
        <h3 class="acg-card__heading">Helping Homebuyers Become “House Rich” longer headline</h3>
        <p class="acg-card__desc">Legal expert Jeffrey P. Naimon discusses fair housing rules and other likely regulatory changes on Arch MI’s PolicyCast videoLegal expert Jeffrey P. Naimon discusses fair housing rules and other likely regulatory changes on Arch MI’s PolicyCast video
          <a href="#" class="acg-card__btn acg-btn acg-btn--link">
            Learn More
            <i class="acg-icon fas fa-chevron-right"></i>
          </a>
        </p>
      </div>
    </div>
    <div class="acg-card acg-card--featured-content">
      <div class="acg-card__image">
        <img src="https://placekitten.com/600/600" alt="A cat" class="acg-card-image" />
      </div>
      <div class="acg-card__content">
            <p class="acg-card__eyebrow">${blockEyebrow}</p>
            <h3 class="acg-card__heading">${blockHeading}</h3>
            <p class="acg-card__desc">${blockDescription}
              <a href="#" class="acg-card__btn acg-btn acg-btn--link">
                Learn More
                <i class="acg-icon fas fa-chevron-right"></i>
              </a>
            </p>
        </div>
    </div>
    <div class="acg-card acg-card--featured-content">
      <div class="acg-card__image">
        <img src="https://placekitten.com/600/600" alt="A cat" class="acg-card-image" />
      </div>
      <div class="acg-card__content">
        <p class="acg-card__eyebrow">${blockEyebrow}</p>
        <h3 class="acg-card__heading">${blockHeading}</h3>
        <p class="acg-card__desc">${blockDescription}
          <a href="#" class="acg-card__btn acg-btn acg-btn--link">
            Learn More
            <i class="acg-icon fas fa-chevron-right"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
`;
};
