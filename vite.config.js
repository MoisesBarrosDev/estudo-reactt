import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        exercicio01: resolve(__dirname, 'index2.html'), // aqui você inclui o novo caminho
        aula01: resolve(__dirname, './aula01/index3.html'), // aqui você inclui o novo caminho
        aula02: resolve(__dirname, './aula02/index.html'), // aqui você inclui o novo caminho
        aula03: resolve(__dirname, './aula03/index.html'), // aqui você inclui o novo caminho
        aula04: resolve(__dirname, './aula04/index.html'), // aqui você inclui o novo caminho
        exercicio02: resolve(__dirname, './exercicio02/index.html'), // aqui você inclui o novo caminho
        exercicio03: resolve(__dirname, './exercicio03/index.html'), // aqui você inclui o novo caminho

        
        
      },
    },
  },
});
