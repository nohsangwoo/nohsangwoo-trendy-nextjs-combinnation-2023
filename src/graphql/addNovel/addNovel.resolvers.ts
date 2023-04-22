import { Context } from '@src/graphql/types'

const resolvers = {
  Mutation: {
    AddNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.create({
        data: {
          title: args.title,
          image: args.image,
        },
      })
    },
  },
}

export default resolvers
