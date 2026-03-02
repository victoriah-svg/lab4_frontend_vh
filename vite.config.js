import { defineConfig } from "vite";
import { resolve } from "path"; 
import {  ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig ({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                animering: resolve(__dirname, "animering.html"),
                diagram: resolve(__dirname, "diagram.html"),
                karta: resolve(__dirname, "karta.html")
        
            }
        }
    },
    plugins: [
        ViteImageOptimizer({
            jpeg: {
                quality: 70
            },
            jpg: {
                quality: 70
            },
            webp: {
                quality: 75
            },
            svg: {
                quality: 70
            }
        })
    ]
});