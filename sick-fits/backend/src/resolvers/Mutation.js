const Mutation = {
    async createItem(prarent, args, ctx, info){
        //TODO check if they are logged in 
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info); 
        console.log(item); //you can return a promise instead of this syntax, but storage is easier this way
        return item;
    }
    // createDog(parent, args, ctx, info){
    //     global.dogs = global.dogs || []; 
    //     //create the dogs
    //     const newDog = {name: args.name}; 
    //     global.dogs.push(newDog); 
    //     console.log('Mutation', args);
    //     return newDog; 
    // }
};

module.exports = Mutation;
