import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: false,
    lib: {
      // THIS is your only entry. Do NOT add an 'input'
      entry: resolve(__dirname, 'entry.js'),
      name: 'WhirlwindCSS-nextgen',
      fileName: 'index',
      formats: ['es']
    },
    cssCodeSplit: false, // Keeps your classes in one file
    rollupOptions: {
      // Do NOT put 'input' here. It conflicts with build.lib.entry
      output: {
        assetFileNames: (assetInfo) => {
          // FIx for the 'names' vs 'name' Array error
          const name = assetInfo.name || (assetInfo.names && assetInfo.names[0]);
          if (name && name.includes('style.css')) return 'classes.css';
          return 'classes.css'; // Force it to be the King
        }
      }
    }
  }
})