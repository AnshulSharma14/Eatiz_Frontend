import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
 
  // define: {
  //   'process.env': process.env
  // },
  plugins: [mkcert(),vue()],
  // resolve: {
  //   alias: [
  //     {
  //       find: /^~.+/,
  //       replacement: (val) => {
  //         return val.replace(/^~/, "");
  //       },
  //     },
  //   ],
  // },
  // build: {
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   }
  // }
})
