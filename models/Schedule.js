const Sequelize = require('sequelize');
module.exports = class Schedule extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            categoryName: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            categoryDetail: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            majorName: {
                type: Sequelize.STRING(50),
                allowNull: true
            },
            startDate: {
                type: Sequelize.DATE,
                allowNull: false
            },
            endDate: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'Schedule',
            timestamps: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db) {}
};
