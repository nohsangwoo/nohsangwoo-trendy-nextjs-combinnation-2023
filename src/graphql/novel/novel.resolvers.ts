import { Context } from '@src/graphql/types'

const resolvers = {
  Query: {
    novel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findUnique({
        where: {
          id: args.id,
        },
      })
    },
  },
}

export default resolvers
