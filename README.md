# Gerenciador de Tarefas com Integração de Clima

Este é um projeto de backend desenvolvido usando NestJS e Prisma. O objetivo deste projeto é fornecer um sistema de gerenciamento de tarefas com integração de informações meteorológicas relevantes para ajudar os usuários a planejarem suas tarefas de acordo com as condições climáticas.

## Funcionalidades

- CRUD de Tarefas: Os usuários podem criar, visualizar, atualizar e excluir suas próprias tarefas.
- Integração de API Meteorológica: Informações meteorológicas são fornecidas pela OpenWeather API `https://openweathermap.org/api`.
- Filtragem e Ordenação: Funcionalidades para filtrar e ordenar tarefas com base em diferentes critérios.

## Tecnologias Utilizadas

- NestJS: Framework de backend para Node.js.
- Prisma: ORM para lidar com a camada de banco de dados.
- PostgreSQL: Banco de dados para armazenar dados do aplicativo.
- JWT (JSON Web Tokens): Para autenticação de usuários.
- OpenWeather API: Para obter informações meteorológicas.

## Instalação

1. Clone este repositório: `git clone https://github.com/joaoribeirosl/weather-api.git`
2. Instale as dependências: `npm i`
3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias, como as credenciais do banco de dados e as chaves da API externa de acordo com o `.env.example`.
4. Execute as migrações do banco de dados: `npx prisma migrate dev`
5. Inicie o servidor: `npm run start:dev`

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request com melhorias, correções de bugs ou novas funcionalidades.
