module.exports = (sequelize, DataTypes) => sequelize.define('characteristics_value', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    value: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    unit: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    characteristic: {
        type: DataTypes.INTEGER(8),
        allowNull: true,
    },
    modification: {
        type: DataTypes.INTEGER(8),
        allowNull: true,
    },
}, {
    tableName: 'characteristics_value',
});
