import { Context } from '@src/graphql/types'

const resolvers = {
  Mutation: {
    deleteAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.delete({
        where: {
          id: args.id,
        },
      })
    },
  },
}

export default resolvers
