import { ApolloDriver } from '@nestjs/apollo'
import { isProdution } from '@shared/common'
import {
  resolvers as scalarsResolvers,
  typeDefs as scalarsTypeDefs,
} from 'graphql-scalars'
import responseCachePlugin from 'apollo-server-plugin-response-cache'

export const getConfigModuleConfiguration = () => ({
  isGlobal: true,
  envFilePath: '.env',
})

export const getGraphqlModuleConfiguration = ({ showPlayground = true }) => ({
  driver: ApolloDriver,
  debug: isProdution,
  playground: showPlayground,
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
})
