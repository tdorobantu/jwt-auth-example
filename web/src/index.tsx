import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {ApolloProvider} from "@apollo/react-hooks"
import ApolloClient from "apollo-boost";
import { authToken } from './authToken';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  request: (operation) => {
    const accessToken = authToken;
    operation.setContext({
      headers: {
        authorization: accessToken ? `bearer ${accessToken}` : 'NO-TOKEN'
      }
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client ={client}>
    <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);