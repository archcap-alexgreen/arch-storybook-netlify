class Alert {
  constructor() {
    // Bind class methods
    this.init = this.init.bind(this);
    this.close = this.close.bind(this);
    this.alertSelector = '[data-ui="alert"]';
    this.closeSelector = '[data-ui="alert-close"]';

    // Initialize component on load
    document.addEventListener('DOMContentLoaded', this.init);
  }

  init() {
    this.alertContainer = document.querySelector(this.alertSelector);
    this.alertClose = document.querySelector(this.closeSelector);

    if (this.alertClose) {
      this.alertClose.addEventListener('click', this.close);
    }
  }

  close() {
    // Set aria-hidden to hide alert
    this.alertContainer.setAttribute('aria-hidden', true);

    // Remove event listeners
    this.alertClose.removeEventListener('click', this.close);
  }
}

window.acgAlert = window.acgAlert || new Alert();
