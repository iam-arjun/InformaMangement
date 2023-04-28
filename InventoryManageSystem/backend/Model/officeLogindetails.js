const mongoose = require('mongoose');
const { stringify } = require('querystring');

const officeLoginForm = mongoose.Schema({
    name: {
        type: String,
    },
    date: {
        type: String,
    },
    login_time: {
        type: String,
    },
    logout_time: {
        type: String
    },
    day_attendance: {
        type: String
    },



})

const OfficeLoginModel = new mongoose.model('OfficeLogindoc', officeLoginForm)

module.exports = OfficeLoginModel