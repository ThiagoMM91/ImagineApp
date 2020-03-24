const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express( );

app.use(cors( ));
app.use(express.json());
app.use(routes);

/*
Rota / Recurso ( ' / ' )
*/

/*
Métodos HTTP:

GET - Buscar/listar uma info do BackEnd;
POST - Criar uma info no BackEnd;
PUT - Alterar uma info no BackEnd;
DELETE - Deletar uma info no BackEnd;
*/

/*
Tipos de Parâmetros:

*Query Params: Parametros nomeados enviados na rota após o "?" e servem para
filtros, paginação buscando várias infos utilizando o "&" Exemplo:
http://localhost:3333/users?page=2&name=Thiago&idade=25 etc.

*Route Params: Parâmetros utilizados para identificar recursos 
/users/:id -> http://localhost:3333/users/1

*Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/* BANCO DE DADOS 
*SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
*NoSQL: MongoDB, CouchDB, etc.
*/

/* DRIVER
* Driver: SELECT * (tudo) FROM USERS
* Query Builder: table('users').select('*').where( )
*/


app.listen(3333);