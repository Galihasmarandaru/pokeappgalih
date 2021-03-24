
import { ApolloClient, InMemoryCache } from '@apollo/client';

const stringURL = 'https://graphql-pokeapi.vercel.app/api/graphql'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: stringURL
});

export default client;