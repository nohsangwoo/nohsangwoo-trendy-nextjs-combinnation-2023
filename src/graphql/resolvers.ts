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
    deleteNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.delete({
        where: {
          id: args.id,
        },
      })
    },
    addAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.create({
        data: {
          novelId: args.novelId,
          name: args.name,
        },
      })
    },

    deleteAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.delete({
        where: {
          id: args.id,
        },
      })
    },
  },
}
