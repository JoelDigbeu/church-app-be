import { ApolloDriver } from '@nestjs/apollo'
import { isProdution } from './shared'
import {
  resolvers as scalarsResolvers,
  typeDefs as scalarsTypeDefs,
} from 'graphql-scalars'
import responseCachePlugin from 'apollo-server-plugin-response-cache'

export const configModuleConfiguration = {
  isGlobal: true,
  envFilePath: isProdution ? '.env' : `.env.${process.env.NODE_ENV}`,
}

export const graphqlModuleConfiguration = {
  driver: ApolloDriver,
  debug: isProdution,
  playground: process.env.SHOW_GRAPHQL_PLAYGROUND === 'true',
  typePaths: ['./**/*.graphql'],
  resolvers: [scalarsResolvers],
  typeDefs: [...scalarsTypeDefs],
  subscriptions: {
    'subscriptions-transport-ws': true,
    'graphql-ws': true,
  },
  cacheControl: {
    defaultMaxAge: 5,
  },
  plugins: [responseCachePlugin()],
}
