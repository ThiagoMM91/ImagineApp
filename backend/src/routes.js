/*criando váriaveis para conter os valores dentro do (), require = puxar algo 
que foi exportado com (module.exports = x;)*/
const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

//criando sessão de login
routes.post('/sessions', SessionController.create);

//Cadastro e listagem de ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Cadastro/lista e delete de Casos
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

/*Aqui estamos exportando esse arquivo para que outros arquivos possam utilizar*/
module.exports = routes;


