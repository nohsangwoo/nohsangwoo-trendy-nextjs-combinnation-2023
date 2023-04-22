import { Context } from '@src/graphql/types'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { prisma } from '@pm/db'

// const resolverFiles = loadFilesSync(path)

import graphQLLetConfig from '../../../.graphql-let.yml'
import { schema } from '@src/graphql/schema'

const apolloServer = new ApolloServer<Context>({
  schema: schema,
})

console.log('__DIRNAME with graphql files: ', __dirname)
export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
})
