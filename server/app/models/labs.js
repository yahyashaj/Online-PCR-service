const db = require("./database");

module.exports = {
  getAllLabs: (callback) => {
    const queryStr = `SELECT * FROM labs`;
    db.query(queryStr, function (err, result) {
      (err) => {
        console.log("Ops you have an error", err);
        return;
      };
      callback(err, result);
    });
  },
  getOneLab: (params, callback) => {
    const queryStr = `SELECT * FROM labs where lab_id = ?`;
    db.query(queryStr, params, function (err, result) {
      (err) => {
        console.log("Ops you have an error", err);
        return;
      };
      callback(err, result);
    });
  },
  getAllAppointment: (params, callback) => {
    const queryStr = `SELECT a.appointment_id, a.first_name,a.last_name,a.number_phone,a.date,a.time,a.place,a.status,a.result 
                        FROM labs l
                        INNER JOIN appointments a ON l.lab_id=a.lab_id
                        WHERE a.lab_id = 6 AND (a.status <> "Rejected") AND (a.result  IS NULL)`;
    db.query(queryStr, params, function (err, result) {
      callback(err, result);
    });
  },
  CreateLab: (params, callback) => {
    const queryStr = `INSERT INTO labs( 
                      lab_name,logo,description,phone,working_hours,location,locationMap,costOfTest) 
                      VALUES (?,?,?,?,?,?,?,?);`;
    db.query(queryStr, params, function (err, result) {
      callback(err, result);
    });
  },
};
