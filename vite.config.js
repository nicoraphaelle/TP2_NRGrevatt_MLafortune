import { defineConfig } from 'vite';

export default defineConfig({
    base: '/TP2_NRGrevatt_MLafortune/',

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