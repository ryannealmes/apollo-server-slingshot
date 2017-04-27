const resolvers = {
  Query: {
    testString(root, args){
      return "Hello world";
    },
  }
};

export default resolvers;
