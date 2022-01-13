class Accordion {
  constructor() {
    // Bind class methods
    this.init = this.init.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);

    // Class properties
    this.accordionOpen = 'acg-accordion--open';

    // Initialize component on load
    document.addEventListener('DOMContentLoaded', this.init);
  }

  init() {
    // DOM elements
    this.accordionToggles = document.querySelectorAll(
      '[data-ui="accordion-toggle"]'
    );

    if (this.accordionToggles) {
      this.accordionToggles.forEach(accordionToggle => {
        accordionToggle.addEventListener('click', this.toggleAccordion);
      });
    }
  }

  toggleAccordion() {
    const openClass = this.accordionOpen;
    const accordion = event.currentTarget;
    const accordionContent = accordion.nextElementSibling;

    if (accordion.classList.contains(openClass)) {
      accordion.setAttribute('aria-expanded', 'false');
      accordionContent.setAttribute('aria-hidden', 'true');
    } else {
      accordion.setAttribute('aria-expanded', 'true');
      accordionContent.setAttribute('aria-hidden', 'false');
    }

    accordion.classList.toggle(openClass);
  }
}

window.acgAccordion = window.acgAccordion || new Accordion();
