import { useEffect } from '@storybook/client-api';

export const Default = () => {
  useEffect(() => {
    window.acgStockTicker.init();
  }, []);

  return `<div class="acg-global-nav__stock" data-ui="stock-ticker">
   <span class="acg-global-nav__stock__price" data-ui="stock-ticker-price">ACGL $28.37</span>
  <span class="acg-global-nav__stock__change" data-ui="stock-ticker-change">0.67 (2.42%)</span>
  </div>`;
};

export default {
  title: 'Components / Stock Ticker'
};
