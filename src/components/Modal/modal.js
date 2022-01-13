class Modal {
  constructor() {
    // Bind class methods
    this.init = this.init.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.closeButtons = [];
    this.boundButtonEvent = undefined;
    this.boundModalEvent = undefined;
    this.lastModalTrigger = undefined;
    this.focusableElementsSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])';

    this.modalTriggersAttr = 'modal-trigger';
    this.modalTriggersWrapperSelector = '[data-ui="modal-trigger-wrapper"]';

    // Initialize component on load
    document.addEventListener('DOMContentLoaded', this.init);
  }

  init() {
    const modalTriggerWrappers = document.querySelectorAll(
      this.modalTriggersWrapperSelector
    );

    // Bind click listener to all present modal triggers
    if (modalTriggerWrappers) {
      modalTriggerWrappers.forEach(trigger =>
        trigger.addEventListener('click', this.openModal)
      );
    }
  }

  dispatchCustomEvent(elem, eventName) {
    const customEvent = document.createEvent('Event');

    customEvent.initEvent(eventName, true, true);

    elem.dispatchEvent(customEvent);
  }

  openModal(event) {
    const trigger = event.target;
    const modalTrigger =
      trigger.hasAttribute('data-ui') &&
      trigger.getAttribute('data-ui') === this.modalTriggersAttr;
    const modalId = trigger.getAttribute('aria-controls');
    const modal = document.getElementById(modalId);
    const activeModal = document.querySelector(
      '[role="dialog"][aria-hidden="false"]'
    );

    let firstFocusable;

    if (modal && modalTrigger) {
      this.closeButtons = modal.querySelectorAll('[data-ui="modal-close"]');
      firstFocusable = modal.querySelector(this.focusableElementsSelector);

      if (activeModal) {
        // Close last active modal
        this.closeModal(activeModal);
      } else {
        // Set modal trigger
        this.lastModalTrigger = trigger;
      }

      // Capture event handlers
      const boundButtonEvent = this.closeModal.bind(this, modal);
      const boundModalEvent = this.handleKeyDown.bind(this, modal);

      // Make modal visible and attach event listeners
      modal.setAttribute('aria-hidden', false);
      modal.addEventListener('keydown', boundModalEvent);

      this.closeButtons.forEach(function (button) {
        button.addEventListener('click', boundButtonEvent);
      });

      if (firstFocusable) {
        // Add focus to first focusable element
        firstFocusable.focus();
      }

      this.dispatchCustomEvent(modal, 'arch-modal-open');
    }
  }

  closeModal(modal) {
    // Set aria-hidden to hide modal
    modal.setAttribute('aria-hidden', true);

    // Remove event listeners
    modal.removeEventListener('keydown', this.boundModalEvent);
    this.boundModalEvent = undefined;

    if (this.closeButtons.length) {
      this.closeButtons.forEach(button => {
        button.removeEventListener('click', this.boundButtonEvent);
      });
      this.boundButtonEvent = undefined;
    }

    // Add focus back to last trigger
    if (this.lastModalTrigger) {
      this.lastModalTrigger.focus();
    }

    this.dispatchCustomEvent(modal, 'arch-modal-close');
  }

  handleKeyDown(modal, event) {
    const key = event.keyCode;
    const escapeKey = 27;
    const tabKey = 9;

    if (key !== tabKey && key !== escapeKey) {
      // Exit early if no matching key
      return true;
    }

    if (key === escapeKey) {
      this.closeModal(modal);
    } else if (key === tabKey) {
      this.trapFocus(modal, event);
    }
  }

  trapFocus(modal, event) {
    const activeElement = document.activeElement;
    const focusables = modal.querySelectorAll(this.focusableElementsSelector);
    const lastFocusableIndex = focusables.length - 1;
    const withShift = event.shiftKey;

    // Trap focus between focusable elements within modal
    if (withShift && activeElement === focusables[0]) {
      event.preventDefault();

      focusables[lastFocusableIndex].focus();
    } else if (!withShift && activeElement === focusables[lastFocusableIndex]) {
      event.preventDefault();

      focusables[0].focus();
    }
  }
}

window.acgModal = window.acgModal || new Modal();
