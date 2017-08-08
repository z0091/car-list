module.exports = (sequelize, DataTypes) => sequelize.define('modifications', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    pagetitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
    },
    longtitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
    },
    alias: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '',
    },
    published: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
    },
    pub_date: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
        defaultValue: '0',
    },
    serie: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: '0',
    },
    introtext: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    menuindex: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: '0',
    },
    createdon: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
        defaultValue: '0',
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    editedon: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
        defaultValue: '0',
    },
    deleted: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
    },
    deletedon: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
        defaultValue: '0',
    },
    publishedon: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
        defaultValue: '0',
    },
    uri: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    motor: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '',
    },
    hp: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '',
    },
    drive: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '',
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: '0.00',
    },
    transmission: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: '',
    },
    start_production_year: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    end_production_year: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    tableName: 'modifications',
});
