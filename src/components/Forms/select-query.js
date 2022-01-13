class SelectQuery {
  constructor() {
    // Bind class methods
    this.init = this.init.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // Initialize component on load
    document.addEventListener('DOMContentLoaded', this.init);
  }

  init() {
    // DOM elements
    const selects = document.querySelectorAll('[data-ui="select-query"]');

    selects.forEach(select => {
      select.addEventListener('change', this.handleChange);
    });
  }

  updateQueryString(uri, key, value) {
    const re = new RegExp('([?&])' + key + '=.*?(&|#|$)', 'i');

    // Adds, updates, or replaces key=value pairs
    if (value === undefined) {
      if (uri.match(re)) {
        return uri.replace(re, '$1$2');
      } else {
        return uri;
      }
    } else if (uri.match(re)) {
      return uri.replace(re, '$1' + key + '=' + value + '$2');
    } else {
      let hash = '';

      if (uri.indexOf('#') !== -1) {
        hash = uri.replace(/.*#/, '#');
        uri = uri.replace(/#.*/, '');
      }
      const separator = uri.indexOf('?') !== -1 ? '&' : '?';

      return uri + separator + key + '=' + value + hash;
    }
  }

  handleChange(event) {
    const select = event.currentTarget;
    const triggerId = select.getAttribute('aria-labelledby');
    const trigger = triggerId && document.getElementById(triggerId);
    const selectedOption = select.options[select.selectedIndex];
    const queryName = select.name;
    const queryValue = encodeURIComponent(selectedOption.value);
    const queryString = this.updateQueryString(
      window.location.href,
      queryName,
      queryValue
    );

    if (trigger) {
      // Update trigger text
      trigger.textContent = selectedOption.textContent;
    }

    // Add query string to URL
    window.location.href = queryString;
  }
}

window.acgSelectQuery = window.acgSelectQuery || new SelectQuery();
