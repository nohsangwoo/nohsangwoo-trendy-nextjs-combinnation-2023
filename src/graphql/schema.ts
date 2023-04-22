import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers as allResolvers } from '@src/graphql/resolvers'
import { join, resolve } from 'path'

import novelResover from '@src/graphql/novel/novel.resolvers'
import novelTypeDefs from './novel/novel.typeDefs'

import novelsResover from '@src/graphql/novels/novels.resolvers'

import { typeDefs as AllTypeDefs } from '@src/graphql/typeDefs'

// import graphQLLetConfig from '../../'
// 소환되는 graphqlServer기준으로 경로가 잡히기 때문에 graphqlServer 경로를 기준으로 지정한다.
console.log(' path.resolve()', resolve())
console.log('__dirname', __dirname)
console.log('process.cwd()', process.cwd())

const resolversPath = path.join(process.cwd(), '/src/graphql/resolvers')
// const loadedResolvers = loadFilesSync(resolversPath)
const rootPath = resolve()
// const rootPath = process.cwd()

// const resolversPath = path.join(rootPath, 'src/graphql/resolvers')

// const loadedResolvers = loadFilesSync(resolversPath)

// const loadedFiles = loadFilesSync(
//   join(process.cwd(), 'src/graphql/**/*.typeDefs.ts'),
// )
// const mergedTypeDefs = mergeTypeDefs(loadedFiles)

export const resolvers = mergeResolvers([
  novelResover,
  novelsResover,
  allResolvers,
])

export const typeDefs = mergeTypeDefs([novelTypeDefs, AllTypeDefs])

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

export default {}
