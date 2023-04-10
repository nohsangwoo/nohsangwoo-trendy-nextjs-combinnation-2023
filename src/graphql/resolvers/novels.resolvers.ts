import { Context } from '../types'

const resolvers = {
  Query: {
    novels: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findMany({})
    },
  },
}

export default resolvers
