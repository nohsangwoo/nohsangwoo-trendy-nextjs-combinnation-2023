import { Context } from './types'
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
}
