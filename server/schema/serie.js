const { GraphQLObjectType, GraphQLList } = require('graphql');
const { attributeFields, resolver } = require('graphql-sequelize');
const { series } = require('../db');


const Type = new GraphQLObjectType({
    name: 'Serie',
    description: 'Car serie',
    fields: attributeFields(series),
});

const Query = {
    serie: {
        type: new GraphQLList(Type),
        resolve: resolver(series),
    },
};

module.exports = {
    Type,
    Query,
};
