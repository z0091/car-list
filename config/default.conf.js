const path = require('path');
const packageInfo = require('../package.json');

module.exports = {
    version: packageInfo.version,
    name: packageInfo.name,
    release: false,
    verbose: false,
    hotWebpack: false,
    app: {
        assetsPath: path.resolve(__dirname, '../assets'),
        srcPath: path.resolve(__dirname, '../src'),
        devtool: 'cheap-module-eval-source-map',
    },
    dist: {
        path: path.resolve(__dirname, '../dist'),
        devtool: '',
    },
    db: {
        dbname: '',
        dbuser: '',
        dbpass: '',
        dpoptions: {
            host: 'localhost',
            dialect: 'mysql',
            define: {
                timestamps: false,
            },
            pool: {
                max: 5,
                min: 0,
                idle: 10000,
            },
        },
    },
    log: {
        dev: {
            replaceConsole: true,
            level: 'info',
            usefiles: false,
            files: [{
                type: 'file',
                filename: 'log/app-dev.log',
                maxLogSize: 10485760,
                numBackups: 3,
            }, {
                type: 'file',
                filename: 'log/api-dev.log',
                maxLogSize: 10485760,
                numBackups: 3,
                category: 'api',
            }],
            console: true,
        },
        prod: {
            replaceConsole: true,
            level: 'info',
            usefiles: false,
            files: [{
                type: 'file',
                filename: 'log/app-prod.log',
                maxLogSize: 10485760,
                numBackups: 3,
            }, {
                type: 'file',
                filename: 'log/api-prod.log',
                maxLogSize: 10485760,
                numBackups: 3,
                category: 'api',
            }],
            console: false,
        },
    },
    server: {
        port: '9987',
        host: '127.0.0.1',
        apiPrefix: '/api',
    },
};
