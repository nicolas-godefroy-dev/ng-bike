# @ng-bike

A Bike Sharing app made in Expo (iOS, Android), React Native. 🚴🚴🏾‍♀️🚴🏽‍♂️

## Architecture

The api and web apps are made with [next.js](https://nextjs.org/), with the [app-router](https://nextjs.org/docs/app).

The mobile apps are made with [expo](https://docs.expo.dev/) and [expo-router](https://expo.github.io/router/docs/).

The styling is made with [tailwind](https://tailwindcss.com/).

The CMS is [prismic](https://prismic.io/) with [slicemachine](https://prismic.io/slice-machine).

The react state managements are made with [react-query](https://tanstack.com/query/v3/) and [zustand](https://github.com/pmndrs/zustand).

The style guide is made with [storybook](https://storybook.js.org/).

The unit and integration tests are made with [jest](https://jestjs.io/).

The end-to-end tests are made with [maestro](https://maestro.mobile.dev/)

## Apps

| App                                  | Description                                                      |
| ------------------------------------ | ---------------------------------------------------------------- |
| [`apps/app`](./apps/app/README.md)   | The expo bike sharing app (ios/android).                         |
| [`apps/api`](./apps/api/README.md)   | The bike sharing api gateway made with GraphQL Mesh and next.js. |
| [`apps/blog`](./apps/blog/README.md) | The blog made with next.js.                                      |

## Packages

| Package                                                            | Description                                                                          |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| [`packages/expo-config`](./packages/expo-config/README.md)         | Set of base config files for the expo apps (eslint, metro, babel, typescript, jest). |
| [`packages/next-config`](./packages/next-config/README.md)         | Set of base config files for the next apps (eslint, typescript, jest).               |
| [`packages/tailwind-config`](./packages/tailwind-config/README.md) | The tailwind theme for the apps                                                      |
| [`packages/twrnc`](./packages/twrnc/README.md)                     | The react-native implementation of tailwind.                                         |
| [`packages/utils`](./packages/utils/README.md)                     | Set of helpers (functions, types...).                                                |

## Figma

Feel free to reuse this [FIGMA](https://www.figma.com/file/STwur9wHa2T9eXOTIygLrh/expo-bike-sharing?node-id=0%3A1) file.

<p float="left">
  <img src="./docs/figma.png?raw=true" width="480" />
</p>
