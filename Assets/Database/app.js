// Browse to this location through terminal
// run - nodemon app [to start the server]

const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://aditya:Dejte9-pywqec-qaxvac@my75hard.ek7bca9.mongodb.net/?retryWrites=true&w=majority")

const User = require('./Models/userModel');

let insert = async () => {
    await User.create({
        name: 'Aditya Kumar',
        email: 'adityaakumar.in@gmail.com',
        password: 'konbola'
    })
}
insert();






http.listen(3000, function() {
    console.log("Server is running...")
});