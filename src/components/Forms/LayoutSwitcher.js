export const layoutSwitcherInput = () => {
  return `
  <div class="acg-layout-switcher">
    <legend class="acg-layout-switcher__legend acg-accessibly-hidden">Switch  Layout</legend>
    <div class="acg-layout-switcher__opt">
        <input class="acg-layout-switcher__opt__input" id="layout-switcher-list" type="radio" name="layout-switcher" value="list" checked />
        <label class="acg-layout-switcher__opt__label" for="layout-switcher-list">
        <span class="acg-accessibly-hidden">List View</span>
        <i class="acg-icon fas fa-list-ul"></i>
        </label>
    </div>
    <div class="acg-layout-switcher__opt">
        <input class="acg-layout-switcher__opt__input" id="layout-switcher-grid" type="radio" name="layout-switcher" value="grid" />
        <label class="acg-layout-switcher__opt__label" for="layout-switcher-grid">
        <span class="acg-accessibly-hidden">Grid View</span>
        <i class="acg-icon fas fa-th-large"></i>
        </label>
    </div>
  </div>
  `;
};

export const layoutSwitcherText = () => {
  return `
  <div class="acg-layout-switcher acg-layout-switcher--text">
    <legend class="acg-layout-switcher__legend">Region</legend>
    <div class="acg-layout-switcher__opt">
        <input class="acg-layout-switcher__opt__input" id="region-all" type="radio" name="region" value="all" checked />
        <label class="acg-layout-switcher__opt__label" for="region-all">
        All
        </label>
    </div>
    <div class="acg-layout-switcher__opt">
        <input class="acg-layout-switcher__opt__input" id="region-us" type="radio" name="region" value="us" />
        <label class="acg-layout-switcher__opt__label" for="region-us">
        United States
        </label>
    </div>
  </div>
  `;
};

export default layoutSwitcherInput;
