const resolvers = {
  Query: {
    testString(root, args){
      return "Hello world from server";
    },
    testString2(root, args){
      return "Hello world from server";
    },
  }
};

export default resolvers;
