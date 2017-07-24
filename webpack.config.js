const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192 // 8k
                }
            }
        ]
    },
    entry: {
        'piaofang': './src/entry/index'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'var',
        publicPath: '/assets/'
    },
    externals: [
        {
            // 'zepto-modules': 'zepto',
            // 'react': true,
            // 'react-dom': true
        }
    ],
    resolve: {
        modules: ['node_modules', path.resolve('./src')],
        enforceExtension: false,
        extensions: ['.js', '.jsx', '.css', 'scss'],
        alias: {}
    },
    plugins: []
}
