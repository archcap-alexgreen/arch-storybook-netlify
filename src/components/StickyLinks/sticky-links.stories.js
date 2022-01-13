export const StickyLinks = () => `
<div style="height: 1000px">
  <div class="acg-sticky-links__wrapper">
    <div class="acg-sticky-link acg-sticky-link--blue" data-ui="sticky-link">
      <button class="acg-btn acg-sticky-link__toggle" style="background-image: url(ratestar.png)" data-ui="sticky-link-toggle">
        <span class="acg-sticky-link__toggle__text acg-accessibly-hidden">
          RateStar
        </span>
      </button>
      <div class="acg-sticky-link__content">
        <ul class="acg-sticky-link__list">
          <li><a href="#">Get a Quote</a></li>
        </ul>
      </div>
    </div>

    <div class="acg-sticky-link acg-sticky-link--purple  acg-sticky-link--open" data-ui="sticky-link">
      <button class="acg-btn acg-sticky-link__toggle" data-ui="sticky-link-toggle">
        <span class="acg-sticky-link__toggle__text">CONNECT</span>
      </button>
      <div class="acg-sticky-link__content">
        <ul class="acg-sticky-link__list">
          <li><a href="#">Origination</a></li>
          <li><a href="#">Servicing</a></li>
          <li><a href="#">Request Access</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
`;

export default {
  title: 'Blocks / Sticky Links'
};
