// webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require('sass'),
              indentedSyntax: true, // optional
              // Requires sass-loader@^8.0.0
              sassOptions: {
                indentedSyntax: true // optional
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
        options: {
          svgo: {
            plugins: [
              {removeDoctype: true},
              {removeComments: true},
              {cleanupIDs: false},
              {collapseGroups: false},
              {removeEmptyContainers: false}
            ]
          }
        }
      },
    ],
  }
}