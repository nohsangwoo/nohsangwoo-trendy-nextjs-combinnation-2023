import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers as allResolvers } from '@src/graphql/resolvers'
import { join, resolve } from 'path'

import novelResover from '@src/graphql/novel/novel.resolvers'
import novelTypeDefs from '@src/graphql/novel/novel.typeDefs'

import novelsResover from '@src/graphql/novels/novels.resolvers'
import novelsTypeDefs from '@src/graphql/novels/novels.typeDefs'

import addNovelResolver from '@src/graphql/addNovel/addNovel.resolvers'
import addNovelTypeDefs from '@src/graphql/addNovel/addNovel.typeDefs'

import updateNovelResolver from '@src/graphql/updateNovel/updateNovel.resolvers'
import updateNovelTypeDefs from '@src/graphql/updateNovel/updateNovel.typeDefs'

import deleteNovelResolver from '@src/graphql/deleteNovel/deleteNovel.resolvers'
import deleteNovelTypeDefs from '@src/graphql/deleteNovel/deleteNovel.typeDefs'

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
  addNovelResolver,
  updateNovelResolver,
  deleteNovelResolver,
  allResolvers,
])

export const typeDefs = mergeTypeDefs([
  novelTypeDefs,
  novelsTypeDefs,
  addNovelTypeDefs,
  updateNovelTypeDefs,
  deleteNovelTypeDefs,
  AllTypeDefs,
])

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

export default {}
