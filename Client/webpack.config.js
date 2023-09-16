module.exports = {
    stats:'minimal',
    mode: 'development',
    entry: [
      './src/App/App.js'
    ],
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/, // Expresión regular para archivos .css
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true, // Habilitar CSS Modules
              },
            },
          ],
        },
      ]
    }
  }