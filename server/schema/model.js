const { GraphQLObjectType, GraphQLList } = require('graphql');
const { attributeFields, resolver } = require('graphql-sequelize');
const { models } = require('../db');


const Type = new GraphQLObjectType({
    name: 'Model',
    description: 'Car Model',
    fields: attributeFields(models),
});

const Query = {
    model: {
        type: new GraphQLList(Type),
        resolve: resolver(models),
    },
};

module.exports = {
    Type,
    Query,
};
