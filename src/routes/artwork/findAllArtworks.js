const { Artwork } = require('../../db/sequelize')
const { Op } = require("sequelize");
const auth = require('../../auth/auth')

module.exports = app => {
  app.get('/api/artworks', auth, (req, res) => {
    if(req.query.idArtist) {
      return Artwork.findAndCountAll({
        where: {
          idArtist: {
            [Op.eq] : parseInt(req.query.idArtist) 
          },
        }
      }).then(({ count, rows }) => {
        const message = `La liste des oeuvres de l'artiste ${req.query.idArtist} a bien été récupérée.`
        res.json({ message, data: rows, count })
      })
    } else {
      Artwork.findAll()
        .then(artworks => {
          const message = 'La liste des oeuvres a bien été récupérée.'
          res.json({ message, data: artworks })
        })
        .catch(error => {
          const message = "La liste des oeuvres n'a pas pu être retournée."
          res.status(500).json({ message, data: error })
        })
    }
  })
}
