# @ng-bike/blog

The blog made with next.js.

## Folder structure

| Directory     | Description                                           |
| ------------- | ----------------------------------------------------- |
| `app`         | The app routes, and layouts.                          |
| `components`  | The react components.                                 |
| `libs`        | The project libraries (prismic client...).            |
| `mocks`       | The mocked data for the tests and stories.            |
| `slices`      | The components mapping with the prismic slicemachine. |
| `.storybook`  | The storybook config.                                 |
| `customtypes` | The generated prismic custom types.                   |
| `public`      | The public files.                                     |

## Commands

| Script            | Description                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| `start`           | Runs the next.js build                                                    |
| `dev`             | Runs the blog in development mode.                                        |
| `build`           | Builds the next.js app.                                                   |
| `slicemachine`    | Runs the prismic slicemachine.                                            |
| `test`            | Runs the test suite using Jest.                                           |
| `typecheck`       | Checks the project for type errors using the TypeScript compiler (`tsc`). |
| `lint`            | Runs ESLint.                                                              |
| `lint:fix`        | Runs ESLint and automatically fixes problems that can be fixed.           |
| `dev:storybook`   | Runs the storybook in development mode.                                   |
| `build:storybook` | Builds the storybook.                                                     |
