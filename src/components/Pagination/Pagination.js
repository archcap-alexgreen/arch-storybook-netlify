export const Default = () => {
  return `
    <nav class="acg-pagination" role="navigation" aria-label="Pagination navigation">
    <ul class="acg-pagination__list">
      <li>
        <a href="#" class="acg-pagination__control" aria-disabled="false" title="First">
          <i class="fas fa-chevron-left" focusable="false"></i>
          <span class="acg-accessibly-hidden">First</span>
        </a>
      </li>
      <li><a href="#" class="acg-pagination__link">1</a></li>
      <li><a href="#" class="acg-pagination__link">2</a></li>
      <li><a href="#" class="acg-pagination__link">3</a></li>
      <li><a href="#" class="acg-pagination__link">4</a></li>
      <li>&hellip;</li>
      <li><a href="#" class="acg-pagination__link">6</a></li>
      <li><a href="#" class="acg-pagination__link">7</a></li>
      <li><a href="#" class="acg-pagination__link">8</a></li>
      <li><a href="#" class="acg-pagination__link">9</a></li>
      <li>
        <a href="#" class="acg-pagination__control" title="Last">
          <span class="acg-accessibly-hidden">Last</span>
          <i class="fas fa-chevron-right" focusable="false"></i>
        </a>
      </li>
    </ul>
  </nav>
    `;
};

export const PreviousDisabled = () => {
  return `
    <nav class="acg-pagination" role="navigation" aria-label="Pagination navigation">
    <ul class="acg-pagination__list">
      <li>
        <a href="#" class="acg-pagination__control acg-pagination__link--disabled" aria-disabled="true" title="First">
          <i class="acg-icon fas fa-chevron-left" focusable="false"></i>
          <span class="acg-accessibly-hidden">First</span>
        </a>
      </li>
      <li><a href="#" class="acg-pagination__link">1</a></li>
      <li><a href="#" class="acg-pagination__link">2</a></li>
      <li><a href="#" class="acg-pagination__link">3</a></li>
      <li><a href="#" class="acg-pagination__link">4</a></li>
      <li>&hellip;</li>
      <li><a href="#" class="acg-pagination__link">6</a></li>
      <li><a href="#" class="acg-pagination__link">7</a></li>
      <li><a href="#" class="acg-pagination__link">8</a></li>
      <li><a href="#" class="acg-pagination__link">9</a></li>
      <li>
        <a href="#" class="acg-pagination__control" title="Last">
          <span class="acg-accessibly-hidden">Last</span>
          <i class="acg-icon fas fa-chevron-right" focusable="false"></i>
        </a>
      </li>
    </ul>
  </nav>
    `;
};
