import { Context } from '@src/graphql/types'

const resolvers = {
  Mutation: {
    deleteNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.delete({
        where: {
          id: args.id,
        },
      })
    },
  },
}

export default resolvers
