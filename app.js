const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const sequelize = require("./src/db/sequelize");

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev')).use(bodyParser.json())

sequelize.initDb();

// Endpoints
// require("./src/routes/findAllPokemons")(app);
// require("./src/routes/findPokemonByPk")(app);
// require("./src/routes/createPokemon")(app);
// require("./src/routes/updatePokemon")(app);
// require("./src/routes/deletePokemon")(app);
// require("./src/routes/login")(app);

// Not found
app.use((_req, res) => {
  const message = 'Impossible de trouver la ressource demandée.'
  res.status(404).json({ message })
})

app.listen(port, () => console.log(`API démarrée sur : http://localhost:${port}`))
