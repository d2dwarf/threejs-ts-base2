import Webpack from 'webpack'
import { join } from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const config = (): Webpack.Configuration => ({
  entry: {
    app: join(__dirname, 'src', 'entry.ts')
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: './js/[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.(glsl|vert|frag)$/,
        use: 'webpack-glsl-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
      title: 'threejs+base2+ts',
      filename: 'index.html',
      scriptLoading: 'defer'
    })
  ],
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.jsx', '.glsl', '.vert', 'frag'
    ]
  }
})

export default config