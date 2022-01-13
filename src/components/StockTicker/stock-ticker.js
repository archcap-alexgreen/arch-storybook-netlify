class StockTicker {
  constructor() {
    // Bind class methods
    this.init = this.init.bind(this);

    // Initialize component on load
    document.addEventListener('DOMContentLoaded', this.init);
  }

  init() {
    // Attach properties and DOM elements
    this.changeClass = 'acg-global-nav__stock__change';
    this.endpoint =
      'https://archcapital2020tf.q4web.com/feed/StockQuote.svc/GetFullStockQuoteList?exchange=XNAS&symbol=ACGL';
    this.stockTickers = document.querySelectorAll('[data-ui="stock-ticker"]');

    if (this.stockTickers.length) {
      this.fetchStockData();
    }
  }

  async fetchStockData() {
    try {
      const response = await fetch(this.endpoint);
      const rawData = await response.json();
      const data = this.processData(rawData);

      this.renderData(data);
    } catch (e) {
      // Handle error
      console.error('Error processing data --', e);
    }
  }

  processData(data) {
    const stockData = data.GetFullStockQuoteListResult;

    if (!stockData || !stockData.length) {
      return null;
    }

    const [stock] = stockData;

    return {
      change: stock.Change.toFixed(2),
      percentChange: stock.PercChange.toFixed(2),
      price: stock.TradePrice.toFixed(2),
      symbol: stock.Symbol
    };
  }

  renderData(data) {
    this.stockTickers.forEach(ticker => {
      const price = ticker.querySelector('[data-ui="stock-ticker-price"]');
      const change = ticker.querySelector('[data-ui="stock-ticker-change"]');
      const diff = data.change > 0 ? 'up' : 'down';
      const changeClass = `${this.changeClass}--${diff}`;

      price.textContent = `${data.symbol} $${data.price}`;
      change.textContent = `${data.change} (${data.percentChange}%)`;
      change.className = `${this.changeClass} ${changeClass}`;
    });
  }
}

window.acgStockTicker = window.acgStockTicker || new StockTicker();
