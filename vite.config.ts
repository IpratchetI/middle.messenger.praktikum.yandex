import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from './vite-plugin-handlebars-precompile';
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    root: resolve(__dirname, 'src'),
    resolve: {

        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
    build: {
        outDir: resolve(__dirname, 'dist')
    },
    plugins: [handlebars()],
});