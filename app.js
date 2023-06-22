const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = process.env.PORT || 3000

app
  .use(morgan('dev'))
  .use(bodyParser.json())

sequelize.initDb()

// Endpoints
require('./src/routes/artist/createArtist')(app)
require('./src/routes/artist/deleteArtist')(app)
require('./src/routes/artist/findAllArtists')(app)
require('./src/routes/artist/findArtistByPk')(app)

require('./src/routes/artwork/createArtwork')(app)
require('./src/routes/artwork/deleteArtwork')(app)
require('./src/routes/artwork/findAllArtworks')(app)
require('./src/routes/artwork/findArtworkByPk')(app)

require('./src/routes/login')(app)

// Not found
app.use((_req, res) => {
  const message = 'Impossible de trouver la ressource demandée.'
  res.status(404).json({ message })
})

app.listen(port, () => console.log(`API démarrée sur : http://localhost:${port}`))
