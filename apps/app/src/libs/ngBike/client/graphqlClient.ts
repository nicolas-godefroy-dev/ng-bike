import { GraphQLClient } from 'graphql-request';

const ENDPOINT = 'https://ng-bike-api.vercel.app/api/graphql';

export const graphqlClient = new GraphQLClient(ENDPOINT);

export const fetcher = <TData, TVariables extends { [key: string]: any }>(
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit['headers']
) => {
  return async (): Promise<TData> =>
    graphqlClient.request({
      document: query,
      variables,
      requestHeaders,
    });
};
