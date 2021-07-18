const express = require('express');
const app = express();
const PORT = 5000;
require('./db/conn');
app.use(express.json());
const User = require('./model/userSchema');


app.get('/', (req, res) => {
    res.send("Hello This is my MERN Application");
})

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
     return res.status(422).json("plz Filled field properly")
    }
    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            return res.status(422).json("Duplicate Found")
        }
        const user = new User({ email, password });
        user.save().then(() => {
            return res.status(201).json("Stored Succcessfully");
        }).catch((err) => {
            return res.status(500).json("Error");
        });
    }).catch((err) => {
        console.log(err);
     })
})

app.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT);
})

