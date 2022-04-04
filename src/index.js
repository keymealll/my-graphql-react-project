import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import App from './App';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moviedetails from './moviedetails';


//Database to GraphQL
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <BrowserRouter>
  {/* <ApolloProvider client={client}> */}
  <App />
  {/* </ApolloProvider> */}
  </BrowserRouter>,
  document.getElementById('root'),
);