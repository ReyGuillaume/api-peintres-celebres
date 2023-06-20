const { Artwork } = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = app => {
  app.get('/api/artworks/:id', auth, (req, res) => {
    Artwork.findByPk(req.params.id)
      .then(artwork => {
        if (!artwork) {
          const message = "L'oeuvre n'existe pas. Réessayez avec un autre identifiant."
          return res.status(404).json({ message })
        }
        const message = 'Un oeuvre a bien été trouvée.'
        res.json({ message, data: artwork })
      })
      .catch(error => {
        const message = "L'oeuvre n'a pas pu être renvoyée. Réessayez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}
