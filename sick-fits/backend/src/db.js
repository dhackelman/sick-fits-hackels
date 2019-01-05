//connecting remote prisma db with graphQL for querying via js
//on server, use require. import not ready for node.js yet

const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql', 
    endpoint: process.env.PRISMA_ENDPOINT, 
    secret: process.env.PRISMA_SECRET,
    debug: true
});

module.exports = db; 

