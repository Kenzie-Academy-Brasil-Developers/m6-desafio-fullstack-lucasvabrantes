# User and Contacts

Este é um projeto desenvolvido em Nest (backend) e ReactTS(frontend), somente em um repositório. Neste, é possível cadastrar um usuário bem como adicionar seus contatos, editá-los ou excluí-los.

## PASSO 1

Inicialmente, para rodar a aplicação e testá-la, devemos começar executando nosso servidor. Para tanto, é necessário configurar as variáveis de ambiente contidas no arquivo "**_.env.example_**" que encontra-se na pasta back.

Sendo assim, faça uma cópia deste arquivo dentro da própria pasta **_back_** e preencha a DATABASE\*URL, bem como a SECRET_KEY com os dados necessários. Ademais, renomeie este arquivo somente como "\*\*\*.env\_\*\*"

## PASSO 2

Após a configuração das variáveis de ambiente, agora podemos instalar as dependencias do projeto. Desta forma, execute o seguinte comando no seu terminal, usando o comando correspondente ao seu gerenciador de pacotes.

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### _OBS: Repita o mesmo processo na pasta front, uma vez que é necessário também instalar as dependências de frontend da aplicação._

## PASSO 3

Instaladas as dependências, **tanto na pasta front, quanto na pasta back**, agora já podemos rodar a aplicação.

Deste modo, executemos um dos seguintes comandos com um terminal aberto no diretório **BACK**:

```bash
npm run start:dev
# ou
yarn start
# ou
pnpm start
```

E já com o servidor rodando na porta 3000, executemos agora em um terminal aberto no diretório **FRONT**, um dos seguintes comandos:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

### _OBS: É necessário que ambos os terminais estejam abertos e rodando aplicação(back e front)._

---

### DOCUMENTAÇÃO :orange_book:

As rotas desta aplicação foram documentadas usando a biblioteca Swagger. Para visualização e maior detalhes quanto aos endpoints, corpo de requisição e rotas protegidas, acesse localmente:

## http://localhost:3000/api
