const { ValidationError, UniqueConstraintError } = require('sequelize')
const { Artist } = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = app => {
  app.post('/api/artists', auth, (req, res) => {
    Artist.create(req.body)
      .then(artist => {
        const message = `L'artiste ${artist.name} a bien été créé`
        res.json({ message, data: artist })
      })
      .catch(error => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        if (error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = "L'artiste n'a pas pu être ajouté. Réesseyez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}
