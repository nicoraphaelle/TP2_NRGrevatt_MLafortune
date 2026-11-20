import { defineConfig } from 'vite';

export default defineConfig({
    base: '/tp2-nrgrevatt-mlafortune/',

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