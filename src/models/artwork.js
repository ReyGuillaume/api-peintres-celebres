module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Artwork',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: 'Le nom est déjà utilisé.' },
        validate: {
          notEmpty: { msg: 'Le nom ne dois pas être vide.' },
          notNull: { msg: 'Le nom est requis.' },
        },
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "L'url ne dois pas être vide." },
          notNull: { msg: "L'url est requise." },
        },
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'La date ne dois pas être vide.' },
          notNull: { msg: 'La date est requise.' },
        },
      },
      idArtist: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "L'id de l'artiste est requis." },
        },
      },
    },
    {
      timestamps: true,
      createdAt: 'created',
      updateAt: false,
    }
  )
}
