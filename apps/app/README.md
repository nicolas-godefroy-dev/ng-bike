# @ng-bike/app

The expo bike sharing app (ios/android).

## Folder structure

| Directory    | Description                             |
| ------------ | --------------------------------------- |
| `assets`     | The icons, images...                    |
| `components` | The react components.                   |
| `constants`  | The project constants.                  |
| `hooks`      | The project hooks.                      |
| `libs`       | The project libraries (api clients...). |
| `routes`     | The project routing.                    |
| `screens`    | The app screens.                        |

## Commands

| Script      | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `start`     | Runs expo go                                                              |
| `android`   | Runs the app on the ios simulator.                                        |
| `ios`       | Runs the app on the android simulator.                                    |
| `test`      | Runs the test suite using Jest.                                           |
| `e2e`       | Runs the end-to-end suite using maestro.                                  |
| `typecheck` | Checks the project for type errors using the TypeScript compiler (`tsc`). |
| `lint`      | Runs ESLint.                                                              |
| `lint:fix`  | Runs ESLint and automatically fixes problems that can be fixed.           |
| `prebuild`  | Generate the graphql client and types.                                    |
