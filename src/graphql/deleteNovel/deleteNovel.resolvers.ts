import { Context } from '@src/graphql/types'

const resolvers = {
  Mutation: {
    deleteNovel: async (parent: any, args: any, context: Context) => {
      console.log('delete novel activated')
      return await context.prisma.novel.delete({
        where: {
          id: args.id,
        },
      })
    },
  },
}

export default resolvers
