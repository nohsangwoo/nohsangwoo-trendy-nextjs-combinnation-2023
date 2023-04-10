import { Context } from '@src/graphql/types'
import { Mutation } from '@apollo/server/src/plugin/schemaReporting/generated/operations'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { prisma } from '@pm/db'
import { PrismaClient } from '@prisma/client'
import { typeDefs } from '@src/graphql/typeDefs'
import { gql } from 'graphql-tag'
import { join, resolve } from 'path'

// const resolverFiles = loadFilesSync(path)

import { resolvers } from '@src/graphql/resolvers'
import novelResover from '@src/graphql/resolvers/novel.resolvers'
import novelsResover from '@src/graphql/resolvers/novels.resolvers'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import graphQLLetConfig from '../../../.graphql-let.yml'
import { makeExecutableSchema } from '@graphql-tools/schema'
// const resolversPath = path.join(process.cwd(), '/src/graphql/resolvers')

console.log(' path.resolve()', resolve())
console.log('__dirname', __dirname)
console.log('process.cwd()', process.cwd())

/* const customDir = join(
  __dirname,
  '\\..\\..\\..\\..\\src\\graphql\\resolvers',
) */

const rootPath = resolve()
// const rootPath = process.cwd()

// const resolversPath = path.join(rootPath, 'src/graphql/resolvers')

// const loadedResolvers = loadFilesSync(resolversPath)

const loadedFiles = loadFilesSync(
  join(process.cwd(), 'src/graphql/**/*.typeDefs.ts'),
)
const mergedTypeDefs = mergeTypeDefs(loadedFiles)

const mergedResolvers = mergeResolvers([resolvers, novelResover, novelsResover])

export const schema = makeExecutableSchema({
  resolvers: mergedResolvers,
  typeDefs,
})

const apolloServer = new ApolloServer<Context>({
  schema: schema,
})

console.log('__DIRNAME with graphql files: ', __dirname)
export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
})
