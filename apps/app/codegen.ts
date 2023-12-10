import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'https://ng-bike-api.vercel.app/api/graphql',
  documents: './src/**/*.gql', 
  generates: {
    'src/libs/ngBike/client/types.gen.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: false,
          defaultValue: false
        }
      }
    },
    'src/libs/ngBike/client/reactQuery.gen.ts': {
      plugins: [
        {
        add: {
          content: `
          /* eslint-disable @tanstack/query/prefer-query-object-syntax */
          import * as Types from "./types.gen"
          export type QueryError = Error | import("graphql-request").ClientError
          `
        }
      }, {'typescript-react-query': {
        errorType: "QueryError",
        exposeQueryKeys: true,
        fetcher: {
          func: './graphqlClient#fetcher'
        }
      }}],
      config: {
        typesPrefix: 'Types.'
      }
    }
  },
  config: {
    skipTypename: true,
  },
};
export default config;


