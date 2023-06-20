const { Artwork } = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = app => {
  app.delete('/api/artworks/:id', auth, (req, res) => {
    const id = req.params.id
    Artwork.findByPk(id)
      .then(artwork => {
        if (!artwork) {
          const message = "L'oeuvre demandée n'existe pas. Réessayez avec un autre identifiant."
          return res.status(404).json({ message })
        }
        const artworkDeleted = artwork
        return Artwork.destroy({
          where: { id: artwork.id },
        }).then(_ => {
          const message = `L'oeuvre ${artworkDeleted.id} a bien été supprimée.`
          res.json({ message, data: artworkDeleted })
        })
      })
      .catch(error => {
        const message = "L'oeuvre n'a pas pu être supprimée. Réesseyez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}
