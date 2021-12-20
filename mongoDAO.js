// Import
const MongoClient = require('mongodb').MongoClient;

// MongoDB
const url = 'mongodb://localhost:28018';

// DBName
const dbName = 'lecturersDB'

// Collection
const collName = 'lecturers'

// Variables
var lecturersDB
var lecturers

// connect
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((client) => {
        lecturersDB = client.db(dbName)
        lecturers = lecturersDB.collection(collName)
    }) // END
    .catch((error) => {
        console.log(error)
    }) // END
   
// getLecturers
var getLecturers = function() {
    return new Promise((resolve, reject) => {
        // Cursor
        var cursor = lecturers.find()
        // toArray
        cursor.toArray()
            .then((documents) => {
                resolve(documents)
            }) 
            .catch((error) => {
                reject(error)
            }) // END
    }) // END
} // END