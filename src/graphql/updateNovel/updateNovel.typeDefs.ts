import { gql } from 'graphql-tag'

export default gql`
  type Mutation {
    updateNovel(id: ID!, title: String, image: String): Novel
  }
`
