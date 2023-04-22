import { Context } from './types.d'
export const resolvers = {
  Novel: {
    authors: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.findMany({
        where: {
          novelId: parent.id,
        },
      })
    },
  },

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
