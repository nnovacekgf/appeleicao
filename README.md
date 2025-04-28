# appeleicao

TESTE FEITO PELO CHATGPT EM 28/04

# **Eleição - App de Contagem de Votos**

## **Visão Geral**

Este é um aplicativo web desenvolvido para facilitar a contagem de votos em processos eleitorais gerais. O aplicativo foi projetado para ser simples, intuitivo e flexível, permitindo a manipulação de dados de cooperativas (ou outros grupos) e a organização desses dados com funcionalidades de arrastar e soltar (drag-and-drop). Ideal para qualquer eleição, o sistema permite que os participantes sejam organizados em categorias, com o total de votos facilmente visualizado em gráficos dinâmicos.

## **Funcionalidades**

- **Upload de Arquivos**: Permite o upload de arquivos `.xlsx` com dados de candidatos ou participantes. Após o upload, as informações são automaticamente carregadas no sistema.
- **Arraste e Solte (Drag-and-Drop)**: As cooperativas ou candidatos podem ser organizados em diferentes categorias, como "Favoráveis" ou "Contrários", através de simples arraste e soltura.
- **Visualização de Resultados**: O sistema exibe gráficos dinâmicos e interativos que mostram o total de votos de forma clara e objetiva. O gráfico de pizza exibe a porcentagem de votos favoráveis e contrários.
- **Alterações Persistentes**: As informações da eleição são salvas no navegador, garantindo que os dados permaneçam intactos mesmo após o fechamento ou recarga da página.
- **Modo Claro e Escuro**: O aplicativo permite alternar entre um tema claro e escuro, proporcionando uma melhor experiência visual para o usuário.

## **Pré-requisitos**

Antes de rodar o programa, você precisa ter as seguintes dependências instaladas:

- **Node.js** (versão 16 ou superior)  
- **NPM** (gerenciador de pacotes do Node.js)

## **Como Rodar o Aplicativo**

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/repo-do-app.git
cd repo-do-app
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Rode o Servidor de Desenvolvimento

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento localmente. Você poderá acessar o aplicativo pelo seu navegador em `http://localhost:3000`.

### 4. Como Usar o Aplicativo

1. **Upload do Arquivo**: Clique no ícone de upload (representado por um ícone de "seta para cima" no canto superior direito) para carregar um arquivo Excel (.xlsx) contendo os dados das cooperativas ou participantes da eleição.
2. **Organizar Votos**: Depois de carregar os dados, as cooperativas serão listadas. Você pode arrastar e soltar os itens para as áreas de "Favoráveis" ou "Contrários", conforme a decisão dos votos.
3. **Visualizar Resultados**: O gráfico de pizza será automaticamente atualizado para mostrar a porcentagem de votos favoráveis e contrários. O total de votos também é exibido.
4. **Salvar Dados Localmente**: O aplicativo salva automaticamente os dados no seu navegador, para que você possa retomar o processo de onde parou.

## **Tecnologias Utilizadas**

- **React**: Framework JavaScript para construção da interface de usuário.
- **React DnD**: Biblioteca para implementar funcionalidades de arraste e soltura (drag-and-drop).
- **XLSX**: Biblioteca para leitura e manipulação de arquivos Excel (.xlsx).
- **Recharts**: Biblioteca para criação de gráficos dinâmicos e interativos.
- **Tailwind CSS**: Framework de CSS para estilização rápida e eficiente da interface.
- **Lucide React**: Conjunto de ícones em React para complementar a interface do usuário.

## **Estrutura do Projeto**

O projeto é dividido nas seguintes pastas e arquivos:

- **/public**: Arquivos públicos como `index.html` e ícones.
- **/src**:
  - **App.jsx**: Arquivo principal que contém a lógica do aplicativo e a interface de usuário.
  - **/components**: Componentes reutilizáveis da interface, como botões, campos de entrada, gráficos, etc.
  - **/lib**: Funções auxiliares e utilitárias, como manipulação de dados e gerenciamento do tema.
  - **/styles**: Arquivos de estilo (utilizando Tailwind CSS).

## **Licença**

Este projeto é licenciado sob a [MIT License](LICENSE).

---

Este README oferece um guia completo sobre o funcionamento e a configuração do seu aplicativo. Basta substituir o link do repositório no item "Clone o Repositório" pelo link real de onde você hospedará o código.

Caso queira fazer ajustes, sinta-se à vontade para personalizar conforme as necessidades do seu projeto. Se precisar de mais alguma coisa, estou à disposição!**
