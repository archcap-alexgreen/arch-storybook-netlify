import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withMarkup } from '@stormid/storybook-html-addon-markup';

// Import FontAwesome
import '@fortawesome/fontawesome-free/css/all.css';

// Primitive styles
import 'primitives/_index.scss';

// Import local styles
import 'main.scss';

// Import local scripts
import 'components/Accordion/accordion';
import 'components/Alert/alert';
import 'components/ArticleHeader/article-header';
import 'components/Forms/select-query';
import 'components/Modal/modal';
import 'components/Navigation/navigation';
import 'components/Tabs/tabs';
import 'components/StickyLinks/sticky-links';
import 'components/StockTicker/stock-ticker';

export const parameters = {
  options: {
    storySort: (a, b) => {
      const types = {
        Welcome: 'A',
        Primitives: 'B',
        'Controls & Inputs': 'C',
        Blocks: 'D',
        Components: 'E',
        Navigation: 'F'
      };
      const [aKind] = a[1].kind.split(' / ');
      const [bKind] = b[1].kind.split(' / ');
      const aType = types[aKind];
      const bType = types[bKind];

      return a[1].kind === b[1].kind
        ? 0
        : aType.localeCompare(bType, undefined, { numeric: true });
    }
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

export const decorators = [withMarkup];
