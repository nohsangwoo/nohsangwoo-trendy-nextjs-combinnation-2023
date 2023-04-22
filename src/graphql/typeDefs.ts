import gql from 'graphql-tag'

export const typeDefs = gql`
  type Novel {
    id: ID!
    title: String
    image: String
    createdAt: String
    updatedAt: String
    authors: [Author]
  }
  type Author {
    id: ID!
    name: String
    novelID: String
  }
`
