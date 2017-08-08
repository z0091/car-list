module.exports = (sequelize, DataTypes) => sequelize.define('characteristics', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    parent: {
        type: DataTypes.INTEGER(8),
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    tableName: 'characteristics',
});
