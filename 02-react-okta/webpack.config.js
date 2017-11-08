const path = require('path');

module.exports = {
    entry: {
        'next.app': './src/index.tsx'
    },
    output: {
        path: path.join(__dirname, './server/public/dist'),
        filename: '[name].js',
        // filename: '[name]-[hash:16].js'
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', 'json', '.ts', '.tsx']
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    },

    plugins: [],

    externals: {
        jquery: 'jQuery',
        jQuery: 'jQuery',
        moment: 'moment',
        // react: 'React',
        // 'react-dom': 'ReactDOM'
    }
};
