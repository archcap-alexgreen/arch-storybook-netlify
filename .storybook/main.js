module.exports = {
  stories: [
    '../src/Welcome.stories.mdx',
    '../src/primitives/**/*.stories.@(js|mdx)',
    '../src/components/**/*.stories.@(js|mdx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@stormid/storybook-html-addon-markup'
  ]
};
