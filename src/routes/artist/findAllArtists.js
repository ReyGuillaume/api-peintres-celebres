const { Artist } = require('../../db/sequelize')
const auth = require('../../auth/auth')

module.exports = app => {
  app.get('/api/artists', auth, (_, res) => {
    Artist.findAll()
      .then(artists => {
        const message = 'La liste des artistes a bien été récupérée.'
        res.json({ message, data: artists })
      })
      .catch(error => {
        const message = "La liste des artistes n'a pas pu être retournée."
        res.status(500).json({ message, data: error })
      })
  })
}
