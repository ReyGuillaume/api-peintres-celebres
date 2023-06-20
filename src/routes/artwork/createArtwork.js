const { ValidationError, UniqueConstraintError, ForeignKeyConstraintError } = require('sequelize')
const { Artwork } = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = app => {
  app.post('/api/artworks', auth, (req, res) => {
    Artwork.create(req.body)
      .then(artwork => {
        const message = `L'oeuvre ${artwork.name} a bien été créé.`
        res.json({ message, data: artwork })
      })
      .catch(error => {
        if (error instanceof ValidationError) return res.status(400).json({ message: error.message, data: error })
        if (error instanceof UniqueConstraintError) return res.status(400).json({ message: error.message, data: error })
        if (error instanceof ForeignKeyConstraintError) return res.status(400).json({ message: error.message, data: error })
        const message = "L'oeuvre n'a pas pu être ajouté. Réesseyez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}
