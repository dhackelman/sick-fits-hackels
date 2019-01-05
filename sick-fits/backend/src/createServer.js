const {GraphQLServer} = require('graphql-yoga'); 
//where does the data come from/what does it do? 

//mutations are for C,U,D
const Mutation = require('./resolvers/Mutation'); 
//queries are the R
const Query = require('./resolvers/Query');  
//this is the db
const db = require('./db'); 
//creat the graphql server... (in addition to Prisma server)
function createServer(){
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation, //both of these must be present in schema in order to resolve
            Query//both of these must be present in schema in order to resolve
        }, 
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db }),
    });
}

module.exports = createServer; 

