# Contador de Votos

Este é um aplicativo web para contagem de votos em eleições sindicais, assembleias ou votações genéricas.

## Funcionalidades

- Upload de arquivos `.json`, `.csv`, `.xls`, `.xlsx`
- Visualização de cooperativas por status: *Favoráveis*, *Contrárias* e *Aguardando*
- Gráfico dinâmico com base nos votos
- Aviso de erro se o arquivo estiver mal formatado

## Como usar

1. Clone ou baixe o projeto
2. Execute `npm install` para instalar dependências
3. Use `npm run dev` para rodar localmente
4. Faça deploy no Vercel usando preset **Vite**

## Estrutura

- `App.jsx`: Componente principal com lógica da interface
- `main.jsx`: Ponto de entrada React
- `vite.config.js`: Configuração Vite
- `index.html`: HTML base
- `package.json`: Dependências e scripts

---

Desenvolvido com ❤️ usando React + Vite.