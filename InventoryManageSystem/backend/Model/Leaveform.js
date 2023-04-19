const mongoose = require('mongoose');
const { stringify } = require('querystring');

const LeaveForm = mongoose.Schema({
    name: {
        type: String,
    },
    profession: {
        type: String,
    },
    phone: {
        type: String,
    },

    breakperiod: {
        type: String
    },
    leavestart: {
        type: String
    },
    daterequested: {
        type: String
    },
    leaveend: {
        type: String
    },


})

const LeaveModel = new mongoose.model('Leavedoc', LeaveForm)

module.exports = LeaveModel