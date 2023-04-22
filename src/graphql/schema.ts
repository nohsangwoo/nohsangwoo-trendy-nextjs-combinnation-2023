import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { join, resolve } from 'path'

import novelResovers from '@src/graphql/novel/novel.resolvers'
import novelTypeDefs from '@src/graphql/novel/novel.typeDefs'

import novelsResovers from '@src/graphql/novels/novels.resolvers'
import novelsTypeDefs from '@src/graphql/novels/novels.typeDefs'

import addNovelResolvers from '@src/graphql/addNovel/addNovel.resolvers'
import addNovelTypeDefs from '@src/graphql/addNovel/addNovel.typeDefs'

import updateNovelResolvers from '@src/graphql/updateNovel/updateNovel.resolvers'
import updateNovelTypeDefs from '@src/graphql/updateNovel/updateNovel.typeDefs'

import deleteNovelResolvers from '@src/graphql/deleteNovel/deleteNovel.resolvers'
import deleteNovelTypeDefs from '@src/graphql/deleteNovel/deleteNovel.typeDefs'

import addAuthorResolvers from '@src/graphql/addAuthor/addAuthor.resolvers'
import addAuthorTypeDefs from '@src/graphql/addAuthor/addAuthor.typeDefs'

import deleteAuthorResolvers from '@src/graphql/deleteAuthor/deleteAuthor.resolvers'
import deleteAuthorTypeDefs from '@src/graphql/deleteAuthor/deleteAuthor.typeDefs'

import { resolvers as utisResolvers } from '@src/graphql/utils.resolvers'
import { typeDefs as utisTypeDefs } from '@src/graphql/typeDefs'

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
  novelResovers,
  novelsResovers,
  addNovelResolvers,
  updateNovelResolvers,
  deleteNovelResolvers,
  addAuthorResolvers,
  deleteAuthorResolvers,
  utisResolvers,
])

export const typeDefs = mergeTypeDefs([
  novelTypeDefs,
  novelsTypeDefs,
  addNovelTypeDefs,
  updateNovelTypeDefs,
  deleteNovelTypeDefs,
  addAuthorTypeDefs,
  deleteAuthorTypeDefs,
  utisTypeDefs,
])

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

export default {}
