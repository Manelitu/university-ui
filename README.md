# UnivesityUi


### Pré-requisitos

Para começar a utilizar o UniversityUI é pré-requisito ter o `Node.js` instalado (versão 16.0.x ou acima) e o seu gerenciador de pacote favorito na versão mais atual. Caso você ainda não tenha instalado o pacote `@angular/cli`, instale-o via `npm` ou `yarn`.
Outro requisito é ter instalado o `Git` para fazermos o clone da aplicação. - [Clique aqui se você não tem instalado](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git).

Instalando com npm:
```
npm i -g @angular/cli@^16
```

Caso prefira instalar com o yarn:
```
yarn global add @angular/cli@^16
```

### Passo 1 - Fazer o clone da aplicação

```
(HTTPS) git clone https://github.com/Manelitu/university-ui.git
(SSH) git clone git@github.com:Manelitu/university-ui.git
```

> Após ter feito o clone


#### Passo 1.1 - Instalando as dependências

Antes de executar a instalação ou inserir o **Po** no seu projeto existente, é necessário verificar as dependências do seu projeto, algumas delas precisam estar de acordo com a versão do **Po** e Angular (elas podem ser encontradas no arquivo `package.json` localizado na raiz da aplicação).

Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.

```
   "dependencies": {
    "@angular/animations": "^16.2.0",
    "@angular/common": "^16.2.0",
    "@angular/compiler": "^16.2.0",
    "@angular/core": "^16.2.0",
    "@angular/forms": "^16.2.0",
    "@angular/platform-browser": "^16.2.0",
    "@angular/platform-browser-dynamic": "^16.2.0",
    "@angular/router": "^16.2.0",
    "@auth0/angular-jwt": "^5.1.2",
    "primeflex": "^3.3.1",
    "primeicons": "^6.0.1",
    "primeng": "^16.3.1",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^16.2.1",
    "@angular/cli": "~16.2.1",
    "@angular/compiler-cli": "^16.2.0",
    "@types/jasmine": "~4.3.0",
    "autoprefixer": "^10.4.15",
    "jasmine-core": "~4.6.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "postcss": "^8.4.29",
    "tailwindcss": "^3.3.3",
    "typescript": "~5.1.3"
  }
```

Após verificar se estas dependências do seu projeto estão com as versões compatíveis declaradas acima, acesse a pasta raiz do seu projeto e execute o comando abaixo:

Instalando com npm:
```
npm install
```

> Caso utilizar a versão 7 do npm pode ocorrer erro de versão das dependências, neste caso utilize `npm install --legacy-peer-deps`.

Caso prefira instalar com o yarn:
```
yarn install
```

### Passo 2 - Rodar a aplicação

```
ng s
```

> Ao executar o comando acima, a aplicação será buildada e irá rodar em `localhost:4200`. Pronto!

### E agora?

Agora é só abrir a aplicação e logar caso tenha uma conta. Caso não tenha uma conta, veja como poderá ser criada uma [aqui](https://github.com/Manelitu/api-rest-university).

## E o que a aplicação oferece?

### Funcionalidades

:heavy_check_mark: Incluir, excluir, atualizar e visualizar usuários.   (ADMIN)

:heavy_check_mark: Incluir, excluir, atualizar e visualizar os semestres, cursos e disciplinas;  (COORDENADOR)

:heavy_check_mark: Realizar a montagem da matriz curricular.  (COORDENADOR)

:heavy_check_mark: Visualizar a matriz curricular. (ALUNOS E PROFESSORES)

:heavy_check_mark: logar (QUALQUER PESSOA QUE POSSUA CONTA)



