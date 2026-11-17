import { defineConfig } from 'vite';
 
export default defineConfig({
    server: {
        open: '/selectionProduits.html'
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
                selection: 'selectionProduits.html'
            },
        },
    },
});