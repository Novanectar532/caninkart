// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss(),],
//   build: {
//     assetsInlineLimit: 0,
//   },

// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    assetsInlineLimit: 0,
    minify: false, // prevent extra CPU use on minification
    rollupOptions: {
      input: './index.html',
    },
  },
  assetsInclude: ['/.png', '/.jpg', '/.jpeg', '/.svg'],
})