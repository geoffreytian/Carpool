const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const data = require('./data');

const schema = buildSchema(`
  type Query {
    driverById(id: ID!): Driver
    riderById(id: ID!): Rider
  }
  interface User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    destination: String!
    preferredPickUpLocation: String!
  }
  type Rider implements User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    destination: String!
    preferredPickUpLocation: String!
  }
  type Driver implements User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    destination: String!
    preferredPickUpLocation: String!
    riders: [Rider]!
    capacity: Int!
  }
`);

const root = {
  driverById: ({ id }) => {
    return data.drivers.find(driver => driver.id === id);
  },
  riderById: ({ id }) => {
    return data.riders.find(rider => rider.id === id);
  }
};

/*
EXAMPLE QUERY:

let id = '295586f5-e1db-4b28-98c0-4fcf0f0b6243'
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query: `query getRider($id: ID!) {
      riderById(id: $id) {
        firstName
      }
    }`,
    variables: { id },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
*/

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
