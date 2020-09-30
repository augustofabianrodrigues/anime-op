# アニメ OP • Web Components

The main UI of the application.

It's build on top of [Direflow](https://direflow.io/) and packaged as an **AMD web component library**.

## Installation

**Make sure you are at _/web-components_ directory before running terminal commands!**

With [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed, run from a terminal window:

```bash
yarn
```

> **Note**: it is recommended to use [Yarn](https://yarnpkg.com/) for this project because of the lock file `(yarn.lock)`.
>
> If you still wanna stick with npm [here's a guide for you](https://classic.yarnpkg.com/en/docs/migrating-from-npm/) 😉

## Starting

To start the project for development _(hot reloading included)_, run:

```bash
yarn start
```

## Building

The following command will build this project into an AMD bundle and can be found in `build/appBundle.js`.

```bash
yarn build
```

## Running Tests

```bash
yarn test
```
