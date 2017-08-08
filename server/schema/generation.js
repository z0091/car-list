const { GraphQLObjectType, GraphQLList } = require('graphql');
const { attributeFields, resolver } = require('graphql-sequelize');
const { generations } = require('../db');


const Type = new GraphQLObjectType({
    name: 'Generation',
    description: 'Car generation',
    fields: attributeFields(generations),
});

const Query = {
    generation: {
        type: new GraphQLList(Type),
        resolve: resolver(generations),
    },
};

module.exports = {
    Type,
    Query,
};
