import { gql } from 'graphql-tag'

export default gql`
  type Mutation {
    AddNovel(image: String, title: String): Novel
  }
`
