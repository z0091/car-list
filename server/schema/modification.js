const { GraphQLObjectType, GraphQLList } = require('graphql');
const { attributeFields, resolver } = require('graphql-sequelize');
const { modifications } = require('../db');


const Type = new GraphQLObjectType({
    name: 'Modification',
    description: 'Car modification',
    fields: attributeFields(modifications),
});

const Query = {
    modification: {
        type: new GraphQLList(Type),
        resolve: resolver(modifications),
    },
};

module.exports = {
    Type,
    Query,
};
