function throttle(callback, wait, immediate = false) {
  let timeout = null;

  let initialCall = true;

  return function () {
    const callNow = immediate && initialCall;
    const next = () => {
      // eslint-disable-next-line
      callback.apply(this, arguments);
      timeout = null;
    };

    if (callNow) {
      initialCall = false;
      next();
    }

    if (!timeout) {
      timeout = setTimeout(next, wait);
    }
  };
}

class Navigation {
  constructor() {
    // Bind class methods
    this.handleResize = throttle(this.handleResize.bind(this), 50);
    this.handleScroll = throttle(this.handleScroll.bind(this), 50);
    this.init = this.init.bind(this);
    this.toggleMenuExpansion = this.toggleMenuExpansion.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);

    // Initialize component on load
    document.addEventListener('DOMContentLoaded', this.init);
  }

  init() {
    // DOM elements
    this.header = document.querySelector('[data-ui="header"]');
    this.hero = document.querySelector('[data-ui="hero"]');
    this.nav = document.querySelector('[data-ui="navigation"]');
    this.navMobileToggle = document.querySelector(
      '[data-ui="navigation-mobile-toggle"]'
    );
    this.navTriggers = document.querySelectorAll(
      '[data-ui="navigation-menu-trigger"]'
    );

    // Class properties
    this.breakpoint = '(min-width: 992px)';
    this.hasMobileMenu = 'has-mobile-menu';
    this.hasMobileMenuExpanded = `${this.hasMobileMenu}--expanded`;
    this.hasSecondaryClass = 'acg-header--with-secondary-nav';
    this.secondaryClass = 'acg-main-nav--secondary';
    this.stickyClass = 'acg-main-nav--sticky';
    this.navExpandedClass = 'acg-main-nav--expanded';
    this.menuItemExpandedClass = 'acg-menu__item--expanded';

    if (this.nav) {
      this.toggleHeaderClass();
      this.handleResize();
      this.handleScroll();

      window.addEventListener('resize', this.handleResize);
      document.addEventListener('scroll', this.handleScroll);

      this.navMobileToggle.addEventListener('click', this.toggleMobileMenu);
      this.navTriggers.forEach(trigger => {
        trigger.addEventListener('click', this.toggleMenuExpansion);
        trigger.addEventListener('mouseenter', this.handleMouseEnter);
      });
    }
  }

  handleMouseEnter(event) {
    const trigger = event.currentTarget;
    const menu = trigger.nextElementSibling;
    const bounds = menu.getBoundingClientRect();
    const offset = Math.round(bounds.left + bounds.width);
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    if (offset > viewportWidth) {
      const diff = viewportWidth - offset - 40;

      // Add offset to prevent being cutoff
      menu.style.cssText = `left: ${diff}px;`;
    }
  }

  handleResize() {
    const isDesktop = window.matchMedia(this.breakpoint).matches;

    if (isDesktop) {
      this.collapseExpandedMenus();
      this.nav.classList.remove(this.navExpandedClass);
      document.body.classList.remove(this.hasMobileMenu);
      document.body.classList.remove(this.hasMobileMenuExpanded);
    } else {
      document.body.classList.add(this.hasMobileMenu);
    }
  }

  handleScroll() {
    const scrollPosition = document.documentElement.scrollTop;
    const heroHeight = this.hero ? this.hero.offsetHeight : 500;

    if (scrollPosition > heroHeight) {
      this.nav.classList.add(this.stickyClass);
    } else {
      this.nav.classList.remove(this.stickyClass);
    }
  }

  toggleHeaderClass() {
    const header = this.header;

    if (!header) {
      return;
    }

    if (this.nav.classList.contains(this.secondaryClass)) {
      header.classList.add(this.hasSecondaryClass);
    } else {
      header.classList.remove(this.hasSecondaryClass);
    }
  }

  collapseExpandedMenus() {
    const expandedItems = document.querySelectorAll(
      `.${this.menuItemExpandedClass}`
    );

    expandedItems.forEach(item => {
      item.classList.remove(this.menuItemExpandedClass);
    });
  }

  toggleMobileMenu() {
    const isExpanded = this.nav.classList.contains(this.navExpandedClass);

    this.nav.classList.toggle(this.navExpandedClass);

    if (!isExpanded) {
      this.collapseExpandedMenus();
      document.body.classList.add(this.hasMobileMenuExpanded);
    } else {
      document.body.classList.remove(this.hasMobileMenuExpanded);
    }
  }

  toggleMenuExpansion(event) {
    const isDesktop = window.matchMedia(this.breakpoint).matches;

    if (!isDesktop) {
      const menuItem = event.currentTarget.parentNode;

      menuItem.classList.toggle(this.menuItemExpandedClass);

      event.preventDefault();
    }
  }
}

window.acgNav = window.acgNav || new Navigation();
