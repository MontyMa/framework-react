/**
 * Created by machao on 2020/4/13.
 */

// const {
//     override,
//     disableEsLint,
//     overrideDevServer,
//     watchAll
// } = require('customize-cra');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = (config, env) => {

    if (env === 'development') {
        return config;
    }


    config.plugins.push(
        new BundleAnalyzerPlugin({generateStatsFile: true})
    );

    config.optimization.splitChunks = {
        cacheGroups: {
            // 分割一些主要 chunks
            vendor: {
                test: /[\\/]node_modules[\\/]_?(react|axios|bignumber)(.*)/,
                chunks: 'all',
                name: 'vendor'
            },
            // common: {
            //     test: /[\\/]node_modules[\\/]_?(material-ui)(.*)/,
            //     chunks: 'all',
            //     name: 'common'
            // },
        }
    };
    return config;
};
