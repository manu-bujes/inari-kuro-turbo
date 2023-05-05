import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig(() => {
  const pkg = process.env.npm_package_name;
  return {
    cacheDir: `../../node_modules/.vite/${pkg}`,

    plugins: [vue(), eslint(), cssInjectedByJsPlugin()],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [
    //    viteTsConfigPaths({
    //      root: '../../',
    //    }),
    //  ],
    // },

    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
      minify: true,
      lib: {
        // Could also be a dictionary or array of multiple entry points.
        entry: 'src/index.js',
        name: pkg,
        fileName: 'index',
        // Change this to the formats you want to support.
        // Don't forgot to update your package.json as well.
        formats: ['es'],
      },
      rollupOptions: {
        // External packages that should not be bundled into your library.
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },

    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  };
});
