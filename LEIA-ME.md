# Site profissional da Josiane — versão para VS Code

Esta versão usa React e Vite. Ela foi preparada para você estudar um site moderno com componentes, animações, responsividade e ícones.

## 1. Preparar o Windows

Você precisa ter instalado:

- VS Code
- Node.js na versão LTS

Abra o terminal do VS Code e confira:

```powershell
node --version
npm --version
```

## 2. Abrir e executar

1. Extraia o ZIP.
2. No VS Code, clique em **Arquivo > Abrir Pasta**.
3. Escolha a pasta `josiane-site-profissional-vite`.
4. Abra **Terminal > Novo Terminal**.
5. Execute:

```powershell
npm install
```

6. Quando terminar, execute:

```powershell
npm run dev
```

7. O terminal mostrará um endereço parecido com `http://localhost:5173`. Segure `Ctrl` e clique nele.

Para interromper o site, volte ao terminal e pressione `Ctrl + C`.

## 3. Arquivos importantes

- `src/App.jsx`: textos, seções, links, perguntas e estrutura do site.
- `src/styles.css`: cores, layout, animações e adaptações para celular.
- `src/main.jsx`: inicia o React.
- `public/`: foto da Josiane e capa do e-book.
- `package.json`: bibliotecas e comandos do projeto.

## 4. Primeiros exercícios

1. Em `App.jsx`, procure por `Antes de começar` e altere o título do FAQ.
2. Em `styles.css`, procure por `:root` e teste outra cor em `--clay`.
3. Em `App.jsx`, adicione uma nova pergunta copiando um bloco `<details>`.
4. Em `styles.css`, procure por `@media (max-width:600px)` para estudar os ajustes de celular.

## 5. Antes de publicar

Peça à Josiane para validar os textos, modalidade de atendimento, abordagem, frequência e demais informações profissionais. O conteúdo atual é um esboço conceitual.
