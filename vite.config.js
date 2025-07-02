import { defineConfig } from 'vite'


export default defineConfig({
	root: 'src/assets',
	build: {
		outDir: '../../dist/',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: 'src/assets/main.js',
				css: 'src/assets/main.css',
			}
		}
	}
})
