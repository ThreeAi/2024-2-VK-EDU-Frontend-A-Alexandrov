'use strict';

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    context: SRC_PATH,
    entry: {
        index: './index.js',
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                include: SRC_PATH,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
              },
            {
                test: /\.css$/,
                include: SRC_PATH,
                use: [
                    isDevelopment ? 'style-loader' : MiniCSSExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader?name=src/img/[name].[ext]',
            }
        ],
    },
    plugins: [
        ...(!isDevelopment ? [
            new MiniCSSExtractPlugin({
                filename: '[name].css',
            })
        ] : []),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'chats.html', 
            template: './chats.html' 
        })
    ]
};
