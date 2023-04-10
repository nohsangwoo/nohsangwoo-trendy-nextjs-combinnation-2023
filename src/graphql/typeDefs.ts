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

  type Query {
    novels: [Novel]
    novel(id: ID!): Novel
  }

  type Mutation {
    AddNovel(image: String, title: String): Novel
    updateNovel(id: ID!, title: String, image: String): Novel
    deleteNovel(id: ID!): Novel
    addAuthor(novelId: ID!, name: String): Author
    deleteAuthor(id: ID!): Author
  }
`
