const { Sequelize, DataTypes } = require('sequelize')
const UserModel = require('../models/user')
const ArtistModel = require('../models/artist')
const ArtworkModel = require('../models/artwork')
const bcrypt = require('bcrypt')

const sequelize = new Sequelize('artistes', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false,
})

const User = UserModel(sequelize, DataTypes)
const Artist = ArtistModel(sequelize, DataTypes)
const Artwork = ArtworkModel(sequelize, DataTypes)

Artist.hasMany(Artwork, {
  foreignKey: 'idArtist'
});
Artwork.belongsTo(Artist);

const initDb = () => sequelize.sync().then(_ => console.log('La base de donnée "artistes" a bien été synchronisée.'))

module.exports = {
  initDb,
  User,
  Artist,
  Artwork,
}
