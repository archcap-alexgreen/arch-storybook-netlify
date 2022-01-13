class Tabs {
  constructor() {
    // Bind class methods
    this.init = this.init.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.setCurrentPanel = this.setCurrentPanel.bind(this);
    this.setCurrentTrigger = this.setCurrentTrigger.bind(this);
    this.toggleTab = this.toggleTab.bind(this);

    this.tabTriggersSelector = '[role="tab"]';
    this.activeTabClass = 'acg-tab--active';
    // const hiddenTabsSelector = tabTriggersSelector + '[hidden]';
    // const visibleTabsSelector = tabTriggersSelector + ':not([hidden])';

    // Initialize component on load
    document.addEventListener('DOMContentLoaded', this.init);
  }

  init() {
    // Attach DOM elements
    const tabs = document.querySelectorAll('[data-ui="tabs"]');

    tabs.forEach(tab => {
      tab.addEventListener('keydown', this.handleKeydown);
      tab.addEventListener('click', this.handleClick);
    });
  }

  // Sets state of Tab Panel
  setCurrentPanel(tabId, element) {
    const tabPanels = element.parentNode.querySelectorAll('[role="tabpanel"]');

    tabPanels.forEach(function (panel) {
      if (panel.id === tabId) {
        // Make current tab panel visible
        panel.removeAttribute('hidden');
      } else {
        // Hide other tab panels
        panel.setAttribute('hidden', '');
      }
    });
  }

  setCurrentTrigger(tabId, element) {
    const tabTriggers = element.querySelectorAll(this.tabTriggersSelector);
    const activeClass = this.activeTabClass;

    tabTriggers.forEach(function (trigger) {
      const tab = trigger.parentNode;

      if (trigger.getAttribute('aria-controls') === tabId) {
        // Set parent node to active class.

        tab.classList.toggle(activeClass);

        // Add aria-selected to current tab
        trigger.setAttribute('aria-selected', true);

        // Remove tabindex from current tab
        trigger.removeAttribute('tabindex');

        // Add focus to current tab trigger
        trigger.focus();
      } else {
        // Remove active class from parent
        tab.classList.remove(activeClass);
        // Remove aria-selected and hidden from other tabs
        trigger.removeAttribute('aria-selected');
        trigger.removeAttribute('hidden');

        // Add tabindex -1 to prevent tab focus
        trigger.setAttribute('tabindex', -1);
      }
    });
  }

  handleClick(event) {
    const element = event.currentTarget;
    const tabTrigger = event.target;

    // Prevent hash from appearing in URL
    event.preventDefault();

    this.toggleTab(tabTrigger, element);
  }

  handleKeydown(event) {
    const element = event.currentTarget;
    const key = event.keyCode;
    const tabTriggers = element.querySelectorAll(this.tabTriggersSelector);
    const total = tabTriggers.length;
    const leftKey = 37;
    const upKey = 38;
    const rightKey = 39;
    const downKey = 40;

    let activeIndex = -1;

    const firstTabIndex = 0;

    let nextIndex;

    let nextTrigger;

    if (
      key !== leftKey &&
      key !== rightKey &&
      key !== upKey &&
      key !== downKey
    ) {
      // Exit early if not arrow key
      return false;
    }

    tabTriggers.forEach(function (trigger, index) {
      if (trigger.hasAttribute('aria-selected')) {
        activeIndex = index;
      }
    });

    // Handle tab navigation via left and right arrow keys
    if (key === leftKey || key === upKey) {
      nextIndex = activeIndex - 1;
      nextTrigger =
        nextIndex < firstTabIndex
          ? tabTriggers[total - 1]
          : tabTriggers[nextIndex];
    } else if (key === rightKey || key === downKey) {
      nextIndex = activeIndex + 1;
      nextTrigger =
        nextIndex === total
          ? tabTriggers[firstTabIndex]
          : tabTriggers[nextIndex];
    }

    this.toggleTab(nextTrigger, element);
  }

  toggleTab(tabTrigger, element) {
    const tabId = tabTrigger.getAttribute('aria-controls');
    const tab = tabTrigger.parentNode;

    if (tab.classList.contains(this.activeTabClass)) {
      // Exit early when clicking tab trigger
      return false;
    }

    // Set active tab based on clicked tab link
    if (tabTrigger.getAttribute('role') === 'tab') {
      this.setCurrentTrigger(tabId, element);
      this.setCurrentPanel(tabId, element);
    }
  }
}

window.acgTabs = window.acgTabs || new Tabs();
