# アニメ OP

[![Netlify Status](https://api.netlify.com/api/v1/badges/8baeaa59-bd4a-4249-b25a-2f4bcaa2bf14/deploy-status)](https://app.netlify.com/sites/anime-op/deploys)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)

Simple web app for anime _(アニメ)_ searching.

> Live app: https://anime-op.netlify.app/

> **Anime** (Japanese: アニメ, pronounced (`[a.ɲi.me]`) is hand-drawn and computer animation originating from Japan. _Anime_, a term derived from the English word animation, is used in Japanese to describe all animated works, regardless of origin. Outside of Japan, anime can refer either to animated works produced in Japan, or to their common visual style...
>
> **Source: [Wikipedia](https://en.wikipedia.org/wiki/Anime)**

## Installation

This project requires that [Node.js](https://nodejs.org/en/) is installed.

Dependencies installation:

```bash
yarn
# npm install
```

> **Note**: it is recommended to use [Yarn](https://yarnpkg.com/) for this project because of the lock file `(yarn.lock)`.

This will install all root dependencies and the dependencies for both _base-app_ and _web-components_.

## Starting

```bash
yarn start
# npm start

# Aliases:
# yarn serve
# npm run serve
```

Any of the above commands build the _web-components_ project and start a development server for the _base-app_ @**localhost:8080**.

Once you save a file at the _base-app_ folder, Grunt will lint and generate a development require.js bundle. You will need to refresh the browser for changes to be loaded.

> **Note**: it is recommend to develop the _web-components_ project individually first. Please check out [_web-components_ README file](./web-components/README.md#starting).

## Building

```bash
yarn build
# npm run build
```

This will generate a production ready build of both _web-components_ and _base-app_, respectively. The final build can be found at _base-app/build_ or _dist_ at the root.

## Running Tests

```bash
yarn test
# npm test
```

This will run the tests for _web-components_. No tests are implemented for _base-app_ as of now.

## Overview

The overview of the project can be found at [docs/overview.md](./docs/overview.md).

## Architecture

A complete explanation about the architecture can be found at [docs/architecture.md](./docs/architecture.md).

## Directory Structure

```bash
├── dist (root build folder)
├── base-app
│   ├── build
│   │   ├── index.html
│   │   └── (other files...)
│   ├── src
│   │   └── (code...)
│   └── README.md
├── docs
│   ├── illustrations
│   ├── architecture.md
│   └── overview.md
├── web-components
│   ├── build
│   │   └── appBundle.js
│   ├── src
│   │   └── (code...)
│   └── README.md
└── .gitignore
```
> **Note**: The directory structure is simplified

## Licence

This project is provided under the [MIT License](./LICENSE).

## Links

* [Live Prototype](https://www.figma.com/proto/h7Ls3mKSNtoFwHsJm6GzQb/anime-op?node-id=39%3A1341&scaling=min-zoom)
