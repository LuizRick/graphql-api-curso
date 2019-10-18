"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
    {
        id: 1,
        name: 'Luiz',
        email: 'luiz@gmail.com'
    },
    {
        id: 2,
        name: 'Danny',
        email: 'dany@gmail.com'
    }
];
const typeDefs = `
    type User{
        id:ID!
        name:String!
        email:String!
    }


    type Query {
        allUsers: [User!]!
    }

    type Mutation{
        createUser(name:String!, email:String!): User
    }
`;
const resolvers = {
    User: {
        //para consulta
        id: (user) => user.id,
        name: (user) => user.name,
        email: (user) => user.email
    },
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign({ id: users.length + 1 }, args);
            users.push(newUser);
            return newUser;
        }
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });