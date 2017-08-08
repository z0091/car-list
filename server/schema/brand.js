const { GraphQLObjectType, GraphQLList } = require('graphql');
const { attributeFields, resolver } = require('graphql-sequelize');
const { brands } = require('../db');


const Type = new GraphQLObjectType({
    name: 'Brand',
    description: 'Car Brand',
    fields: attributeFields(brands),
});

const Query = {
    brand: {
        type: new GraphQLList(Type),
        resolve: resolver(brands),
    },
};

module.exports = {
    Type,
    Query,
};
