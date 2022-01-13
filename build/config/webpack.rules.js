const rules = [
  {
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'assets/img',
          name: '[name].[ext]'
        }
      }
    ]
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]
  }
];

export default rules;
