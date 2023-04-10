import path from 'path'
import { Context } from '@src/graphql/types'
import { Mutation } from '@apollo/server/src/plugin/schemaReporting/generated/operations'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { prisma } from '@pm/db'
import { PrismaClient } from '@prisma/client'
import { typeDefs } from '@src/graphql/typeDefs'
import { gql } from 'graphql-tag'

// const resolverFiles = loadFilesSync(path)

import { resolvers } from '@src/graphql/resolvers'
import novelResover from '@src/graphql/resolvers/novel.resolvers'
import novelsResover from '@src/graphql/resolvers/novels.resolvers'
import { mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

// const resolversPath = path.join(process.cwd(), '/src/graphql/resolvers')

console.log(' path.resolve()', path.resolve())
console.log('__dirname', __dirname)
console.log('process.cwd()', process.cwd())

/* const customDir = path.join(
  __dirname,
  '\\..\\..\\..\\..\\src\\graphql\\resolvers',
) */

const rootPath = path.resolve()
// const rootPath = process.cwd()

// const resolversPath = path.join(rootPath, 'src/graphql/resolvers')

// const loadedResolvers = loadFilesSync(resolversPath)

const mergedResolvers = mergeResolvers([resolvers, novelResover, novelsResover])

const apolloServer = new ApolloServer<Context>({
  resolvers: mergedResolvers,
  typeDefs,
})

console.log('__DIRNAME with graphql files: ', __dirname)
export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
})
