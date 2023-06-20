const { Artist } = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = app => {
  app.delete('/api/artists/:id', auth, (req, res) => {
    const id = req.params.id
    Artist.findByPk(id)
      .then(artist => {
        if (!artist) {
          const message = "L'artiste demandé n'existe pas. Réessayez avec un autre identifiant."
          return res.status(404).json({ message })
        }
        const artistDeleted = artist
        return Artist.destroy({
          where: { id: artist.id },
        }).then(_ => {
          const message = `L'artiste ${artistDeleted.id} a bien été supprimé.`
          res.json({ message, data: artistDeleted })
        })
      })
      .catch(error => {
        const message = "L'artiste n'a pas pu être supprimé. Réesseyez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}
