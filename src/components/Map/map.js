class Map {
  constructor() {
    // Bind class methods
    this.handleClick = this.handleClick.bind(this);
    this.init = this.init.bind(this);

    // Initialize component on load
    document.addEventListener('DOMContentLoaded', this.init);
  }

  init() {
    // Attach DOM elements
    this.mapContainer = document.querySelector('[data-ui="map"]');
    this.mapOutput = document.querySelector('[data-ui="map-output"]');
  }

  handleClick(event) {
    const target = event.currentTarget;
    const location = target.getAttribute('name');
    const h2 = document.createElement('h2');

    h2.className = 'acg-map__output__heading';
    h2.textContent = `Loading representatives from ${location}...`;

    this.mapOutput.innerHTML = '';
    this.mapOutput.appendChild(h2);
  }
}

window.acgMap = window.acgMap || new Map();
