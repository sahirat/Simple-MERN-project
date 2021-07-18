const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/database";
mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log(err);
})