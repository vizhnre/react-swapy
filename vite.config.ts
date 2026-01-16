import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'classic' }),
    dts({ rollupTypes: true, tsconfigPath: './tsconfig.build.json' })
  ],
  build: {
    minify: 'terser',
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'react-swapy',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
