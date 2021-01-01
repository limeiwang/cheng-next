// css跟less 并存使用
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
module.exports = withLess(withCSS({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

        // Important: return the modified config
        return config
    },
}))