const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Event = sequelize.define('EVENTS', {
    EV_ID: {type:DataTypes.STRING, primaryKey: true},
    EV_DATE: DataTypes.STRING,
    EV_CODE: DataTypes.STRING,
    EV_ADDCODE: DataTypes.STRING,
    EV_OBJID: DataTypes.STRING,
    EV_CARDID: DataTypes.STRING,
    EV_OW_ID: DataTypes.STRING
}, {
    timestamps: false
})

const JobDegree = sequelize.define('JOBDEGREES', {
    JD_ID: {type:DataTypes.INTEGER, primaryKey: true},
    JD_NAME: DataTypes.STRING,
    JD_FULLNAME: DataTypes.STRING,
}, {
    timestamps: false
})

const SubDivision = sequelize.define('SUBDIVISIONS', {
    SDV_ID: {type:DataTypes.INTEGER, primaryKey: true},
    SDV_NAME: DataTypes.STRING
}, {
    timestamps: false
})

const Worksite = sequelize.define('WORKSITES', {
    WS_ID: {type:DataTypes.INTEGER, primaryKey: true},
    WS_NAME: DataTypes.STRING,
    WS_FULLNAME: DataTypes.STRING
}, {
    timestamps: false
})

const Owner = sequelize.define('OWNERS', {
    OW_ID: {type:DataTypes.INTEGER, primaryKey: true},
    OW_FIRSTNAME: DataTypes.STRING,
    OW_MIDDLENAME: DataTypes.STRING,
    OW_LASTNAME: DataTypes.STRING,
    OW_ARCHIVE: DataTypes.INTEGER,
    OW_IDENT2: DataTypes.STRING,
    OW_REVDATE: DataTypes.STRING,
    OW_JD_ID: DataTypes.INTEGER,
    OW_WS_ID: DataTypes.INTEGER,
    OW_SDV_ID: DataTypes.INTEGER
}, {
    timestamps: false
})

const Reader = sequelize.define('READERS', {
    RD_ID: {type:DataTypes.INTEGER, primaryKey: true},
    RD_SL_ID: DataTypes.INTEGER,
    RD_STATE: DataTypes.STRING,
    RD_TYPE: DataTypes.INTEGER,
    RD_POSITION: DataTypes.INTEGER,
    RD_NUMBER: DataTypes.INTEGER,
    RD_NAME: DataTypes.STRING
}, {
    timestamps: false
})

module.exports = {
    Reader, Owner, Worksite, SubDivision, JobDegree, Event
}