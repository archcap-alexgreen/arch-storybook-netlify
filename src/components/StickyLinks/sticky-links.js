class StickyLink {
  constructor() {
    // Bind class methods
    this.init = this.init.bind(this);
    this.toggleStickyLink = this.toggleStickyLink.bind(this);

    // Class properties
    this.stickyLinkOpen = 'acg-sticky-link--open';

    // Initialize component on load
    document.addEventListener('DOMContentLoaded', this.init);

    // Create Page Overlay
    this.overlay = document.createElement('div');
    this.overlay.classList.add('acg-sticky-link__overlay');
  }

  init() {
    // DOM elements
    this.stickyLinkToggles = document.querySelectorAll(
      '[data-ui="sticky-link-toggle"]'
    );

    if (this.stickyLinkToggles) {
      this.stickyLinkToggles.forEach(stickyLinkToggle => {
        stickyLinkToggle.addEventListener('click', this.toggleStickyLink);
      });
    }
  }

  closeStickyLinksFromOverlay() {
    this.stickyLinkToggles.forEach(stickyLinkToggle => {
      const stickyLink = stickyLinkToggle.parentElement;
      const stickyLinkContent = stickyLinkToggle.nextElementSibling;

      stickyLinkToggle.setAttribute('aria-expanded', 'false');
      stickyLinkContent.setAttribute('aria-hidden', 'true');

      stickyLink.classList.remove(this.stickyLinkOpen);

      this.overlay.remove();
    });
  }

  toggleStickyLink() {
    const stickyLinkToggle = event.currentTarget;
    const stickyLink = stickyLinkToggle.parentElement;
    const stickyLinkContent = stickyLinkToggle.nextElementSibling;

    if (stickyLink.classList.contains(this.stickyLinkOpen)) {
      stickyLinkToggle.setAttribute('aria-expanded', 'false');
      stickyLinkContent.setAttribute('aria-hidden', 'true');
    } else {
      stickyLinkToggle.setAttribute('aria-expanded', 'true');
      stickyLinkContent.setAttribute('aria-hidden', 'false');
      document.body.appendChild(this.overlay);
      this.overlay.addEventListener(
        'click',
        this.closeStickyLinksFromOverlay.bind(this)
      );
    }

    stickyLink.classList.toggle(this.stickyLinkOpen);

    if (document.querySelectorAll('.' + this.stickyLinkOpen).length === 0) {
      this.overlay.remove();
    }
  }
}

window.acgStickyLink = window.acgStickyLink || new StickyLink();
