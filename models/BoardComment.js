const Sequelize = require('sequelize');
module.exports = class BoardComment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    }, {
      sequelize,
      tableName: 'BoardComment',
      timestamps: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
  static associate(db) {
    db.BoardComment.belongsTo(db.User, {foreignKey: 'userId', targetKey: 'userId'});
    db.BoardComment.belongsTo(db.Board, {foreignKey: 'boardId', targetKey: 'id'});
  }
};
