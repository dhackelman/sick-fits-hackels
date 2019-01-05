# Steps for adding items to the backend
1. start with changes to the dataModel in graphQL  
    a. define your schema for prisma and the db that lives beneath prisma
    b. re-deploy prisma so it knows about the new schema and pushes it to prisma service
2. next is the prisma.graphql
    a. it should get updated with the new query and mutation calls autocreated by the prisma deploy
3. schema.graphQL is our public facing API that we interact with using our React Applications
    a. update the schema file to have query and mutation calls that match what you built in the dataModel
    b. graphQL has weird import syntax (must be a comment)
4. launch graphQL playground with npm run dev to see new schema is represent    
    a. sometimes my terminal is launching on localhost:3000 but this project should be 4444
5. Go to Query and Mutation Resolvers
    a. write each new mutation and query that we have access to via that prisma.graphql defined methods
    b. set up each resolver with the 4 params to have access to db, queries, etc. 
    c. there are ways to just use the exact query from prisma.graphql without writing new function with async/await. Use forwardTo from prisma-binding and just forward query to the db