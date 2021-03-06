const Sequelize = require('sequelize');
module.exports = class Category extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      categoryName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      }
    }, {
      sequelize,
      tableName: 'Category',
      timestamps: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
  static associate(db) {}
};
