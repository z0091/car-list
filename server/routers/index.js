const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema');

const router = express.Router();

module.exports = (config) => {
    const apiPrefix = config.get('server:apiPrefix');
    const isDebug = !config.get('release');

    router.use(apiPrefix, graphqlHTTP({
        schema,
        pretty: true,
        graphiql: isDebug,
    }));

    return router;
};
