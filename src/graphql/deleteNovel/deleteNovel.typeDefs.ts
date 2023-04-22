import { gql } from 'graphql-tag'

export default gql`
  type Mutation {
    deleteNovel(id: ID!): Novel
  }
`
