# Aplicação para Projeto de Medicina da UNMdP

Esta aplicação foi criada para o Projeto de Medicina da UNMdP. Utiliza HTML5, CSS, JavaScript e jQuery, com arquivos, pastas e variáveis nomeados em inglês. O desenvolvimento e os comentários no código estão em espanhol. A aplicação usa a biblioteca **vanillaTilt.js** para animações, scroll, pointer e manipulação do DOM. Inclui um simulador de banco de dados `.json` na seção de **Gráficos**.

## Instalação

1. Clone o repositório.
2. Instale os pacotes:
   ```bash
   npm i
   npm i nodemon -D
   npm i method-override
(O uso do nodemon para reiniciar o servidor é opcional.)

Adicione o seguinte ao package.json:

json
Copiar código
"scripts": {
  "dev": "nodemon index.js"
}
Inicie o servidor:

bash
Copiar código
npm run dev
Configuração Predeterminada
PORT: 3000
Arquivo de Configuração: app.js
© 2023 DoriAss
