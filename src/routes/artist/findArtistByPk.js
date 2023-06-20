const { Artist } = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = app => {
  app.get('/api/artists/:id', auth, (req, res) => {
    Artist.findByPk(req.params.id)
      .then(artist => {
        if (!artist) {
          const message = "L'artiste n'existe pas. Réessayez avec un autre identifiant."
          return res.status(404).json({ message })
        }
        const message = 'Un artiste a bien été trouvé.'
        res.json({ message, data: artist })
      })
      .catch(error => {
        const message = "L'artiste n'a pas pu être renvoyé. Réessayez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}
