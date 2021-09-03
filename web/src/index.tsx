import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {ApolloProvider} from "@apollo/react-hooks"
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client ={client}>
    <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// stopped @1.41