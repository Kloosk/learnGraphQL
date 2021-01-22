import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import BookList from "./BookList";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
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
