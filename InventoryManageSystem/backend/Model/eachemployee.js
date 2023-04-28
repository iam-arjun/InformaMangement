const mongoose = require('mongoose');
const { stringify } = require('querystring');

const Allemp = mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    phoneno: {
        type: String
    },
    address: {
        type: String
    },
    guardno: {
        type: String
    },

    panno: {
        type: String
    },
    bankname: {
        type: String
    }, accountno: {
        type: String
    },
    salary: {
        type: String
    },
    workingshift: {
        type: Number
    },
    joindate: {
        type: String
    },
    expirydate: {
        type: String
    },
    profession: {
        type: String
    },
    pp_url: {
        type: String
    }, workingdays: {
        type: String
    },
    Finalpay: {
        type: String
    },


})

const EmpModel = new mongoose.model('AllEmployee', Allemp)

module.exports = EmpModel