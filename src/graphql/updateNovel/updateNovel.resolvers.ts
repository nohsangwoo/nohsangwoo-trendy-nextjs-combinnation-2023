import { Context } from '@src/graphql/types'

const resolvers = {
  Mutation: {
    updateNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          image: args.image,
        },
      })
    },
  },
}

export default resolvers
