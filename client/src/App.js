import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink,from } from '@apollo/client';
import {onError} from "@apollo/client/link/error";
import BookList from "./BookList";

const errorLink = onError(({graphqlErrors,networkError}) =>{
    if(graphqlErrors){
        graphqlErrors.map(({message,location,path}) =>{
            console.log(`Graphql error ${message}`)
        });
    }
});
const link = from([
    errorLink,
    new HttpLink({uri:'http://localhost:4000/graphql'})
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});
function App() {
  return (
      <ApolloProvider client={client}>
        <div>
            <h2>My first Apollo app 🚀</h2>
            <BookList/>
        </div>
      </ApolloProvider>
  );
}

export default App;
