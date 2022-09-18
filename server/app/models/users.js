const db = require("./database");

//exports : to enable us to use the functions from this file in another files
module.exports = {
  getAllUsers: (callback) => {
    const queryStr = `SELECT * FROM users `;
    db.query(queryStr, function (err, result) {
      callback(err, result);
    });
  },

  createUser: (params, callback) => {
    const queryStr = `INSERT INTO users(first_name,last_name,user_password,user_phone,role) VALUES (?,?,?,?, "user");`;
    db.query(queryStr, params, function (err, result) {
      callback(err, result);
    });
  },
  login: (params, callback) => {
    const queryStr = `SELECT * FROM users WHERE user_phone = ? `;
    db.query(queryStr, params, function (err, result) {
      callback(err, result);
    });
  },

  userProfile: (params, callback) => {
    const queryStr = `SELECT l.lab_name,a.date,a.time,a.place,a.status,a.result 
                      FROM labs l
                      INNER JOIN appointments a ON l.lab_id=a.lab_id
                      WHERE a.user_id = ? `;
    db.query(queryStr, params, function (err, result) {
      callback(err, result);
    });
  },
  getUser: (params, callback) => {
    const queryStr = `SELECT l.lab_name,a.date,a.time,a.place,a.status,a.result 
                      FROM labs l
                      INNER JOIN appointments a ON l.lab_id=a.lab_id
                      WHERE a.user_id = ? `;
    db.query(queryStr, params, function (err, result) {
      callback(err, result);
    });
  },
  getUserInfo: (params, callback) => {
    const queryStr = `SELECT * from users where user_id = ? `;
    db.query(queryStr, params, function (err, result) {
      callback(err, result);
    });
  },
};
