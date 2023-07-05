# @ng-bike/api

The bike sharing api gateway made with GraphQL Mesh and next.js.

## Folder structure

| Directory  | Description                                 |
| ---------- | ------------------------------------------- |
| `pages`    | The api routes.                             |
| `services` | The APIs specs to generate the api gateway. |

## Commands

| Script      | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `start`     | Runs the next.js build                                                    |
| `dev`       | Runs the api gateway in development mode.                                 |
| `build`     | Builds the api gateway.                                                   |
| `prebuild`  | Generate the GraphQL Mesh api gateway from the `.meshrc.yaml` file.       |
| `test`      | Runs the test suite using Jest.                                           |
| `typecheck` | Checks the project for type errors using the TypeScript compiler (`tsc`). |
| `lint`      | Runs ESLint.                                                              |
| `lint:fix`  | Runs ESLint and automatically fixes problems that can be fixed.           |
