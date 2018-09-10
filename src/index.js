import "./index.css";

import React from "react";
import { render } from "react-dom";
import { MockedProvider } from "react-apollo/test-utils";

import App, { QUERY } from "./App";

const people = [
  { id: 1, name: 'John Smith' },
  { id: 2, name: 'Sara Smith' },
  { id: 3, name: 'Budd Deey' },
];
render(
  <MockedProvider
    mocks={[
      {
        request: { query: QUERY, variables: {} },
        result: { data: { people }},
      }
    ]}
    addTypename={false}
  >
    <App />
  </MockedProvider>,
  document.getElementById("root")
);
