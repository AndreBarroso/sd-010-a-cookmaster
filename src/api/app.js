const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares/error');
const usersControllers = require('./controllers/users');
const recipesControllers = require('./controllers/recipes');

const app = express();
app.use(bodyParser.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (_request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/users', usersControllers.createUsers);
app.post('/login', usersControllers.loginUsers);
app.post('/recipes', recipesControllers.createRecipes);
app.get('/recipes', recipesControllers.getAllRecipes);
app.get('/recipes/:id', recipesControllers.getRecipesById);
app.put('/recipes/:id', recipesControllers.uptadeRecipesById);
app.delete('/recipes/:id', recipesControllers.deleteRecipes);

app.use(middlewares);

module.exports = app;
