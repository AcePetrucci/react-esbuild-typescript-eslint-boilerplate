const esbuild = require('esbuild');
const servor = require('servor');

/**
 * Set Config Variables
 */

const isDevServer = process.argv.includes('--dev');
const port = 8000;
const outDir = 'dist/build';
const serveDir = 'dist';

/**
 * Set ESbuild Config
 */

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outdir: outDir,
  minify: !isDevServer,
  watch: isDevServer && {
    onRebuild(err, _res) {
      if (err) console.error('Watch build failed: ', err);
    },
  },
  define: {
    'process.env.NODE_ENV': isDevServer ? '"development"' : '"production"',
  },
});

/**
 * Serve if Dev Env
 */

isDevServer && serve();

async function serve() {
  await servor({
    root: serveDir,
    port: 8000,
  });

  console.log(`Serving in localhost:${port}`);
}
