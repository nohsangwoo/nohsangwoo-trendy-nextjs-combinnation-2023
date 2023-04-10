import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from '@src/graphql/resolvers'
import novelResover from '@src/graphql/resolvers/novel.resolvers'
import novelsResover from '@src/graphql/resolvers/novels.resolvers'

// import graphQLLetConfig from '../../'
// 소환되는 graphqlServer기준으로 경로가 잡히기 때문에 graphqlServer 경로를 기준으로 지정한다.
const resolversPath = path.join(process.cwd(), '/src/graphql/resolvers')

// const loadedResolvers = loadFilesSync(resolversPath)

const mergedResolvers = mergeResolvers([resolvers, novelResover, novelsResover])
// const mergedResolvers = mergeResolvers(loadedResolvers)

export default mergedResolvers
