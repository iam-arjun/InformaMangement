const mongoose = require('mongoose');
const { stringify } = require('querystring');

const ChatForm = mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
 

})

const ChatModel = new mongoose.model('ChatDoc', ChatForm)

module.exports = ChatModel