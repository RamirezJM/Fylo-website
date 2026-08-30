import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base:'/Fylo-website/',
  plugins: [
    tailwindcss(),
  ],
})