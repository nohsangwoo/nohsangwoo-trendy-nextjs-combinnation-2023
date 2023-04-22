import { gql } from 'graphql-tag'

export default gql`
  type Query {
    novel(id: ID!): Novel
  }
`
