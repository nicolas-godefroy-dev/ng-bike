# Labs 🧑‍🔬

This is a lab project, the purpose is to test new technologies.

To make the implementation more realistic the project implements a real-life app, a bike sharing app.

## Technologies 🚀

| Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- |
| API and web apps [next.js](https://nextjs.org/) with [app-router](https://nextjs.org/docs/app)                   |
| Mobile apps [expo](https://docs.expo.dev/) with [expo-router](https://expo.github.io/router/docs/)               |
| Styling [tailwind](https://tailwindcss.com/)                                                                     |
| State managements [react-query](https://tanstack.com/query/v3/) and [zustand](https://github.com/pmndrs/zustand) |
| CMS [prismic](https://prismic.io/) with [slicemachine](https://prismic.io/slice-machine)                         |
| Style guide [storybook](https://storybook.js.org/)                                                               |
| Unit and integration tests [jest](https://jestjs.io/)                                                            |
| E2E tests [maestro](https://maestro.mobile.dev/)                                                                 |

## Apps 📱

| Service                              | Description                                                      | Production                                             |
| ------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------ |
| [`apps/app`](./apps/app/README.md)   | The expo bike sharing app (ios/android).                         | [link](https://expo.dev/@nicolas-godefroy-dev/ng-bike) |
| [`apps/api`](./apps/api/README.md)   | The bike sharing api gateway made with GraphQL Mesh and next.js. | [link](https://ng-bike-api.vercel.app/api/graphql)     |
| [`apps/blog`](./apps/blog/README.md) | The blog made with next.js.                                      | [link](https://ng-bike-blog.vercel.app)                |

## Packages 📦

| Package                                                            | Description                                                                          |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| [`packages/expo-config`](./packages/expo-config/README.md)         | Set of base config files for the expo apps (eslint, metro, babel, typescript, jest). |
| [`packages/next-config`](./packages/next-config/README.md)         | Set of base config files for the next apps (eslint, typescript, jest).               |
| [`packages/tailwind-config`](./packages/tailwind-config/README.md) | The tailwind theme for the apps                                                      |
| [`packages/twrnc`](./packages/twrnc/README.md)                     | The react-native implementation of tailwind.                                         |
| [`packages/utils`](./packages/utils/README.md)                     | Set of helpers (functions, types...).                                                |

## Prompts 🤖

| Prompt                                                                | Description                                             |
| --------------------------------------------------------------------- | ------------------------------------------------------- |
| [`prompts/test-react-component`](./prompts/test-react-component.txt) | ChatGpt prompt for generate tests for react components. |

## Figma 🎨

[Figma](https://www.figma.com/file/STwur9wHa2T9eXOTIygLrh/expo-bike-sharing?node-id=0%3A1) source file (components, screens, tokens...).

![Figma source](./docs/figma.png?raw=true)
