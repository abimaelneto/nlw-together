# Sobre o Let me ask

<h1 align="center">
  <img alt="letmeask" title="letmeask" src=".github/logo.png" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
  <a href="#-to-be-done">To Be Done</a>
</p>

<p align="center">

 <img src="https://img.shields.io/static/v1?label=NLW&message=Together&color=8257E5&labelColor=000000" alt="NLW Together" />
</p>

<br>

<p align="center">
  <img alt="Happy" src=".github/letmeask.png" width="100%">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)
  - _Authentication_: permite login dos usuários com a conta google
  - _Realtime Database_: banco NoSQL que armazena as salas, questões e likes do app.
  - _Firebase Hosting_: hospeda os arquivos estáticos do app(pós build)

Para melhoria da experiência de desenvolvimento:

- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## 💻 Projeto

O Let me Ask é um web app com o objetivo de auxiliar apresentadores e palestrantes a gerenciarem as perguntas que recebem durante um evento ao vivo.

O app permite que os espectadores possam enviar votar(dar like) nas perguntas dos outros e enviar a sua própria.

Dessa forma, o apresentador poderá visualizar quais foram as perguntas mais votadas e dar prioridade nas respostas.

Ele foi desenvolvido na trilha de React do Next Level Week - Together, evento online promovido pela Rocketseat entre 20 e 27 de junho de 2021.

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/u0BQK8rCf2KgzcukdRRCWh/Letmeask/duplicate). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## 🚀 Como executar

- Clone o repositório
- Crie um projeto do firebase
- Configure o Authentication do projeto para contas do Google
- Configure o Realtime Database (em "primeiros passos" se ainda não tiver feito isso)
- Obtenha suas credenciais do Firebase e substitua no arquivo .env_template, que está na raiz do projeto
- Configure as regras do Realtime Database utilizando o conteúdo do arquivo firebase-rules
- Instale as dependências do projeto com `yarn`
- Inicie o servidor com `yarn start`

Agora você pode acessar [`localhost:3000`](http://localhost:3000) do seu navegador.

## O próximo nível

### ESLInt/Prettier

Como a proposta da NLW era que fôssemos além do proposto nas aulas, segui os conselhos do Diego e implementei ESLint e Prettier no ambiente de desenvolvimento.
Inicialmente tentei seguir os vídeos da Rocketseat onde o próprio Diego ensina a fazer as configurações. Porém, acredito que devido à evolução das bibliotecas, foi necessário fazer algumas configurações diferentes e silenciar alguns erros(que poderiam ser solucionados com mais tempo, mas por ora não interferem no projeto).

### PWA

Também segui a ideia de tornar o projeto um PWA(Progressive Web App). Criei e populei os arquivos necessários para isso e também gerei um relatório do Lighthouse (focado em Desktop e PWA) que verificou a "Instalabilidade" do projeto.

# TO BE DONE

Algumas features do app não puderam ser desenvolvidas, durante a Next Level Week, então deixo aqui registrado o que ainda pode ser melhorado.

## Design básico do produto

- Imagem e texto mostrando que a sala está vazia e sugerindo compartilhar o código com os amigos(admin) ou fazer perguntas(audiência)
- Modal de encerramento de sala(admin)
- Ordenar perguntas pelas mais votadas para ajudar o admin
- Possibilidade de desfazer ações(marcar como respondida, marcar como destaque e apagar)
- Deixar sala sem deslogar(todos)
- Logout(todos)

## Melhorias mais significativas

- _Histórico do usuário_: A ideia seria criar uma tela da aplicação focada no perfil do usuário. Como o login é relacionado à conta do Google, é possível levantar todo o histórico de uso do app por aquele usuário.

Seria legal que o usuário pudesse visualizar, por exemplo, as salas já criadas(e talvez até as visitadas) por ele, bem como as perguntas que ele fez(se visitou) e as perguntas mais votadas de cada sala que criou ou visitou.

---

Feito com ♥ por Abimael Neto
