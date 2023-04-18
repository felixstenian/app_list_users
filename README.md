<h1 align="center">Lista de Usuários</h1>
Este é um projeto de uma lista de usuários criado usando ReactJS e NextJS que consome dados da API RESTful [randomuser.me](https://randomuser.me/).

A aplicação consiste em uma página que list informações básicas dos usuários, como nome, sobrenome, email, gênero e etc. Os dados são obtidos de uma API externa, que fornece uma lista de usuários aleatórios com informações completas.

<br>

## Como utilizar
Para utilizar a aplicação, basta acessar o [Link da aplicação](https://app-list-users-hronglb9a-felixstenian.vercel.app/) e interagir com a lista de usuários.
<br>
Existe a possibilidade de filtrar a lista de usuários por gênero ou nacionalidade. A pesquisa é realizada em tempo real e os resultados são exibidos na tela. Além disso, a aplicação realiza a paginação dos resultados, onde é exibido 5 usuários por página.

## Como rodar localmente
Caso queira rodar a aplicação localmente, siga os seguintes passos:

```
  - Clone esse repositório:
    $ git clone https://github.com/felixstenian/app_list_users.git

  - Acesse o diretório
    $ cd app_list_users

  - Instale as dependências do projeto
    [npm]
      $ npm install

    [yarn]
      $ yarn

  - Inicie a aplicação
    [npm]
      $ npm dev

    [yarn]
      $ yarn dev

  - Acesse a aplicação em um navegador web usando o endereço http://localhost:3000.

```

### Documentação de componentes
Para acessar a documentação dos componentes é necessário rodar o comando:
```
    [npm]
      $ npm storybook

    [yarn]
      $ yarn storybook
```
> Caso o navegador não abra a aba, acesse a documentação usando o endereço http://localhost:6006.

### Testes
Para rodar os testes é necessário rodar o comando:
```
    [npm]
      $ npm test

    [yarn]
      $ yarn test
```

<h1>Processo de desenvolvimento</h1>

- <strong>Início da aplicação:</strong> A aplicação foi iniciada a partir de um boilerplate com uma estrutura básica inicial. <br>
- <strong>Infra e configurações:</strong> Implementação de configurações de infra, helpes, utils e hooks. <br>
- <strong>Componentes iniciais:</strong> Desenvolvimento de componentes necessários implementando responsividade. <br>
- <strong>Renderização dos dados em uma tabela:</strong> Renderização da listagem de usuários. <br>
- <strong>Adição de filtro:</strong> Adição dos inputs para filtrar a listagem por gênero e/ou nacionalidade. <br>
- <strong>Adição da paginação:</strong> Adição da funcionalidade de paginação permitindo a exibição de mais usuários. <br>
<br>

>O desenvolvimento da aplicação seguiu uma abordagem iterativa e incremental, com a adição de funcionalidades e melhorias de forma progressiva. Além disso, houve um foco em melhorar a experiência do usuário, com a adição de funcionalidades de pesquisa e paginação, além de melhorias visuais e de responsividade.

<br>
<details open>
<summary>Sobre o desenvolvimento 😊</summary>

---
Fiquei muito animado em realizar este projeto, pois o desenvolvimento de interfaces web é uma das minhas áreas favoritas. Foi interessante ver como o projeto evoluiu de forma iterativa e incremental, com a adição de funcionalidades e melhorias de forma progressiva.

Uma das coisas que mais gostei foi a liberdade de utilizar as ferramentas que mais me sinto à vontade, e a utilização da API RESTful simples para consumir os dados dos usuários. Isso permitiu que a aplicação fosse mais modular e escalável, além de facilitar o processo de manutenção dos dados.

Em termos de desafios, um deles foi a implementação de testes em alguns componentes. Isso exigiu um pouco mais de trabalho e atenção aos detalhes, mas foi uma boa oportunidade para praticar minhas habilidades com tests.

Outro desafio foram algumas mudanças com a atualização da versão do Next. Para isso, precisei estudar um pouco mais sobre essas novas atualizações e o impacto no comportamenot da aplicação. No entanto, isso também foi uma ótima oportunidade para aprender e me aprimorar.

No geral, gostei muito do processo de desenvolvimento da aplicação. Foi uma ótima oportunidade para praticar minhas habilidades e trabalhar em um projeto que exigiu um pouco mais em termos testes no front e documentação de componentes.
