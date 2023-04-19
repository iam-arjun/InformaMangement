const mongoose = require('mongoose');



mongoose.connect("mongodb://0.0.0.0:27017/Yourinfo",
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
        console.log("Connected successfully")).catch((err) =>
            console.log(err));

