module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Artist',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Le nom est déjà utilisé.',
        },
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
    },
    {
      timestamps: true,
      createdAt: 'created',
      updateAt: false,
    }
  )
}
