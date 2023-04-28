const mongoose = require('mongoose');
const { stringify } = require('querystring');

const officeSalarySheet = mongoose.Schema({
    name: {
        type: String,
    },
    workDays: {
        type: String,
    },
 



})

const officeSalaryModel = new mongoose.model('OfficeSalaryDocs', officeSalarySheet)

module.exports = officeSalaryModel