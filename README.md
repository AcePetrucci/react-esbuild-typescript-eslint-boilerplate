# React + ESBuild + Typescript + ESlint Boilerplate

This repo is a starter kit boilerplate for new React applications using ESBuild, Typescript and ESlint.

## Installation

Run:
```bash
  npm install
```

ESbuild will serve the files in `localhost:8000`.

You can also change that in the `esbuild.js` config file:

```js
  ...
  async function serve() {
    await servor({
      root: serveDir,
      port: 8000, // Change the port here
    });
    ...
  }
```


## Running

You can serve the boilerplate by running:

```bash
  npm run start
```

Or you can build the files by running:

```bash
  npm run build
```

The static assets (currently only the `.html` file) are in the `/dist` folder.

The generated build files are in `/dist/build`.

