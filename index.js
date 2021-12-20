//Import
var express = require('express');
var mySQLDAO = require('./mySQLDAO');
var bodyParser = require('body-parser');

//Express as app
var app = express()

//Engine to ejs
app.set('view engine', 'ejs')

// Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}));

//HomePage
app.get('/', (req, res) => {
    // Page Links
    res.send("<a href='/listModules'>List Modules </br> <a href='/listStudents'>List Students </br> <a href='/listLecturers'>List Lecturers")
}) //END

// /listModule Page
app.get('/listModules', (req, res) => {
    // Calls getModules
    mySQLDAO.getModules()
        .then((result) => {
            res.render('listModules', { modules: result })
        }) //END
        .catch((error) => {
            res.send(error)
        }) //END
}) // /END

//List Students
app.get('/listStudents', (req, res) => {
    mySQLDAO.getStudents()
        .then((result) => {
            res.render('showStudents', {students:result})
        })
        .catch((error) => {
            res.send(error)
        })
})

//List Lecturers
app.get('/listLectures', (req, res) => {
    mongoDAO.lectures()
    .then((documents) => {
        res.send(documents)
    })
    .catch((error) => {
        res.send(error)
    })
})







// listen
app.listen(3000, () => {
    console.log("Listening on Port 3000")
}) // listen - END