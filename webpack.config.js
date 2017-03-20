const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

/*********************************** Loaders ***********************************/
const loaders = [
    { // react-hot is implemented as babel plugin now
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
    },

    { // used for all project files and some dependencies
        test: /\.scss$/,
        loader: production
            ? ExtractTextPlugin.extract(['css', 'postcss', 'sass'])
            : ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'].join('!'),
        include: path.join(__dirname, 'src'),
    },

    { // other svg images will processed as normal
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file',
        include: path.join(__dirname, 'src/img'),
    },

    { // used for dependencies that don't support sass
        test: /\.css$/,
        loaders: ['style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss'],
    },
    
    
];

// Plugins used in all builds
const pluginsBase = [
    new HtmlWebpackPlugin({
        title: 'Calendar',
        template: 'template.ejs',
    }),

    new webpack.DefinePlugin({
        'process.env': { // build is used for gh-pages
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
            BUILD: JSON.stringify(process.env.BUILD || ''),
        },
    }),
];

const developmentPlugins = [
    ...pluginsBase,
    new webpack.HotModuleReplacementPlugin()
];

const productionPlugins = [
    ...pluginsBase,
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
];

module.exports.loaders = loaders;
module.exports.plugins = {
    base: pluginsBase,
    development: developmentPlugins,
    production: productionPlugins,
};



module.exports = {
    devtool: production ? 'cheap-module-source-map' : 'eval',


    entry: production
        ? ['babel-polyfill', './src/index']
        : [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3002',
        'webpack/hot/only-dev-server',
        './src/index',
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },

    resolve: {
        root: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions: ['', '.js', '.jsx'],
    },

    module: { loaders },
    plugins: production ? productionPlugins : developmentPlugins,

    postcss: [autoprefixer({ browsers: ['last 4 versions'] })],
};
