import "./index.css";

import React from "react";
import { render } from "react-dom";
import { MockedProvider } from "react-apollo/test-utils";
import { GraphQLError } from 'graphql';

import App, { MUTATION, QUERY } from "./App";

const people = [
  { id: 1, name: 'John Smith' },
  { id: 2, name: 'Sara Smith' },
  { id: 3, name: 'Budd Deey' },
];

render(
  <MockedProvider
    defaultOptions={{
      query: { errorPolicy: 'all' },
      mutate: { errorPolicy: 'all' },
    }}
    mocks={[
      {
        request: { query: QUERY, variables: {} },
        result: { data: { people }},
      },
      {
        request: { query: MUTATION, variables: {} },
        result: { errors: [new GraphQLError('You cannot do that')] },
      }
    ]}
    addTypename={false}
  >
    <App />
  </MockedProvider>,
  document.getElementById("root")
);
