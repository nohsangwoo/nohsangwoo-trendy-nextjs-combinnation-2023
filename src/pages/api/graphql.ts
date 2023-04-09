import { Mutation } from './../../../node_modules/@apollo/server/src/plugin/schemaReporting/generated/operations.d'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { prisma } from '@pm/db'
import { PrismaClient } from '@prisma/client'
import { resolvers } from '@src/graphql/resolvers'
import { typeDefs } from '@src/graphql/schema'
import { Context } from '@src/graphql/types'
import { gql } from 'graphql-tag'

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs,
})

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
})
