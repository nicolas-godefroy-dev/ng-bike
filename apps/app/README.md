# @ng-bike/app

The expo bike sharing app (ios/android).

## Deployment status 🚦

List of the current builds, the badges are formatted like this `[Runtime Version | Release Date]`.

An OTA update is available only for the same runtime version.

| Platform | Development client                                                                                                                                                                                                                            | Production Build Submission                                                                                                  | OTA Update                                                                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| IOs      | [![Development client](https://img.shields.io/badge/3.52.0-26.07.2023-FFF.svg?style=for-the-badge&labelColor=000&logoColor=FFF)](https://expo.dev/accounts/nicolas-godefroy-dev/projects/ng-bike/builds/ca3f6711-b7c7-41f3-8b11-aec57dcb9822) | ![Production Build](https://img.shields.io/badge/3.50.0-25.07.2023-FFF.svg?style=for-the-badge&labelColor=000&logoColor=FFF) | [![OTA Update](https://img.shields.io/badge/3.52.0-27.07.2023-FFF.svg?style=for-the-badge&labelColor=000&logoColor=FFF)](https://expo.dev/@nicolas-godefroy-dev/ng-bike) |
| Android  | [![Development client](https://img.shields.io/badge/3.52.0-26.07.2023-FFF.svg?style=for-the-badge&labelColor=000&logoColor=FFF)](https://expo.dev/accounts/nicolas-godefroy-dev/projects/ng-bike/builds/1b1245eb-02e3-4b9d-90b8-a71440fe758e) | ![Production Build](https://img.shields.io/badge/3.50.0-25.07.2023-FFF.svg?style=for-the-badge&labelColor=000&logoColor=FFF) | [![OTA Update](https://img.shields.io/badge/3.52.0-27.07.2023-FFF.svg?style=for-the-badge&labelColor=000&logoColor=FFF)](https://expo.dev/@nicolas-godefroy-dev/ng-bike) |

### Deployment journey

```mermaid
---
title: With Native Changes
---
flowchart LR
  devBuild[Build Dev Client]
  e2eTest[Maestro E2E]
  productionBuild[Prod Build]
  appSubmit[App Submit]
  updateReadme[Update JSON Badges]
  devBuild --> e2eTest --> productionBuild --> appSubmit --> updateReadme
```

```mermaid
---
title: Without Native Changes
---
flowchart LR
  getDevBuild[Get Dev Client]
  e2eTest[Maestro E2E]
  otaUpdate[OTA Update]
  updateReadme[Update JSON Badges]
  getDevBuild --> e2eTest --> otaUpdate --> updateReadme
```

## Folder structure 📁

| Directory    | Description                             |
| ------------ | --------------------------------------- |
| `assets`     | The icons, images...                    |
| `components` | The react components.                   |
| `constants`  | The project constants.                  |
| `hooks`      | The project hooks.                      |
| `libs`       | The project libraries (api clients...). |
| `routes`     | The project routing.                    |
| `screens`    | The app screens.                        |

## Commands 📜

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
