import { gql } from 'graphql-tag'

export default gql`
  type Mutation {
    addAuthor(novelId: ID!, name: String): Author
  }
`
