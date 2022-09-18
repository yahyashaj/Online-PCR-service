const db = require("./database");

module.exports = {
  createAppointment: (params, callback) => {
    const queryStr = `INSERT INTO appointments(lab_id,date,place,first_name,last_name,number_phone, user_ID , time) VALUES (?,?,?,?,?,?,?,?);`;
    db.query(queryStr, params, function (err, result) {
      callback(err, result);
    });
  },
  updateStatus: (params, callback) => {
    const queryStr = `UPDATE appointments SET status = ?  WHERE appointment_id = ?;`;
    db.query(queryStr, params, function (err, result) {
      callback(err, result);
    });
  },
  setResult: (params, callback) => {
    const queryStr = `UPDATE appointments SET result = ?  WHERE appointment_id = ?;`;
    db.query(queryStr, params, function (err, result) {
      callback(err, result);
    });
  },
};
