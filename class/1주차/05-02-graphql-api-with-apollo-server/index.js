import { ApolloServer, gql } from 'apollo-server'

// The GraphQL schema
const typeDefs = gql`
    type Query {
        aaa: String
    }
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        aaa: () => {
            return 'Hello Hamster! 반가워요!!'
        }
    },
};

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});

server.listen(3000).then(({ url }) => {
    console.log("프로그램을 켜는데 성공했어요");
});
