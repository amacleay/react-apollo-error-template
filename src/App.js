import React from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";

const QUERY = gql`
  query ErrorTemplate {
    people {
      id
      name
    }
  }
`;

const MUTATION = gql`
  mutation DeleteOne {
    people {
      id
      name
    }
  }
`;

const Deletor = () => (
  <Mutation mutation={MUTATION}>
    {(mutation, result) => {
      const { error, loading, data, called } = result;
      if (error) {
        return <p>{error.message}</p>;
      }
      if (loading) {
        return <p>loading</p>;
      }
      if (called) {
        return <p>called</p>;
      }
      return <button onClick={mutation}>Click me to remove one</button>;
    }}
  </Mutation>
);
const App = () => (
  <Query query={QUERY}>
    {(result) => {
      const { loading, data } = result;
      return (
        <main>
          <header>
            <h1>Apollo Client Error Template</h1>
            <p>
              This is a template that you can use to demonstrate an error in
              Apollo Client. Edit the source code and watch your browser window
              reload with the changes.
            </p>
            <p>
              The code which renders this component lives in{" "}
              <code>./src/App.js</code>.
            </p>
            <p>
              The GraphQL schema is in <code>./src/graphql/schema</code>.
              Currently the schema just serves a list of people with names and
              ids.
            </p>
          </header>
          {loading ? (
            <p>Loading…</p>
          ) : (
            <ul>
              {data.people.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
          )}
          <Deletor />
        </main>
      )}} 
    </Query>
);

export default App;
export {
  MUTATION,
  QUERY,
};
