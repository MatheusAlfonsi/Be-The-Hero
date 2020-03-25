const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/*
    *Rota  / Recurso
*/

/*
    * Metodos HTTP
    * 
    * GET: Buscar/listar uma informação no back-end
    * POST: Criar uma Informação no back-end
    * PUT: Altetar uma informação no back-end
    * DELETE: Deletar um ainformação no back-end
*/

/**
 * Tipos de parametros
 * 
 * Query Params: Parâmetros nomeados enviados na rota apôs '?' (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/***
 * Driver: SELECT * FROM users
 * Query Bilder: table('users').select('*').where()
 */



app.listen(3333)
