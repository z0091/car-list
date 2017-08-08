const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const _ = require('lodash');

const Brand = require('./brand');
const Model = require('./model');
const Generation = require('./generation');
const Modification = require('./modification');
const Serie = require('./serie');

const query = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query object',
    fields() {
        return _.assign(
            Brand.Query,
            Model.Query,
            Generation.Query,
            Modification.Query,
            Serie.Query,
        );
    },
});

module.exports = new GraphQLSchema({
    query,
});
