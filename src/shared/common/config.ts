export enum NODE_ENV {
  PRODUCTION = 'prod',
  DEVELOPMENT = 'dev',
}

export const isProdution = process.env.NODE_ENV === NODE_ENV.PRODUCTION
