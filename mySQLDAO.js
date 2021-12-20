// Promise-MySQL
var mysql = require('promise-mysql');

// Pool
var pool

// MySQL Pool
mysql.createPool({
    connectionLimit : 3,
    host            : 'localhost',
    user            : 'root',
    password        : '5678',
    database        : 'collegeDB'
    })
    .then((result) => {
        pool = result
    })
    .catch((error) => {
        console.log(error)
}); //END

// getModules
var getModules = function() {
    // Return promise
    return new Promise((resolve, reject) => {
        pool.query('select * from module')
        .then((result) => {
            resolve(result)
        }) //END
        .catch((error) => {
            reject(error)
        }) //END
    }) //END
} //END

// getStudents
var getStudents = function() {
    // Return the promise
    return new Promise((resolve, reject) => {
        pool.query('select * from student')
        .then((result) => {
            resolve(result)
        }) // .then - END
        .catch((error) => {
            reject(error)
        }) // .catch - END
    }) // return - END
} // getCities - END