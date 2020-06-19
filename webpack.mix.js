const mix = require('laravel-mix')
const GasPlugin = require('gas-webpack-plugin')
const Dotenv = require('dotenv-webpack')

mix.webpackConfig({
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.json'],
        alias: {
            '@': __dirname + '/src',
        },
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                test: /\.(ts|tsx)?$/,
                options: {
                    fix: true,
                },
            },
            {
                exclude: /node_modules/,
                loader: 'ts-loader',
                test: /\.(ts|tsx)?$/,
            },
        ],
    },
    plugins: [new Dotenv(), new GasPlugin()],
})

mix.js('src/app.ts', 'dist/').js('src/functions.ts', 'dist/')
