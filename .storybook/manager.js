import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import thinkTheme from './thinkTheme';

addons.setConfig({
  theme: {
    ...themes.light,
    ...thinkTheme
  }
});
