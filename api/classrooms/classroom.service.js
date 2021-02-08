const { nanoid } = require('nanoid');
const pool = require('../../config/database');

module.exports = {
  createClassroom: ({ className, profID }) => {
    return new Promise(async (resolve, reject) => {
      let classCode = nanoid(20);
      let sql =
        'INSERT INTO classroom(class_code, class_name, prof_id) VALUES (?,?,?)';

      await pool.query(
        sql,
        [classCode, className, profID],
        (err, result, field) => {
          if (err) {
            return reject({
              status: 500,
              error: err,
            });
          }

          return resolve(result);
        }
      );
    });
  },

  joinClassroom: ({ reg_id, classCode }) => {
    return new Promise(async (resolve, reject) => {
      let sqlSearch =
        'SELECT classes.class_code FROM classes, users WHERE users.registration_no = ? AND users.user_id = classes.user_id AND classes.class_code = ?'; //  checking if user already joined classroom

      await pool.query(
        sqlSearch,
        [reg_id, classCode],
        async (err, result, field) => {
          if (err) {
            return reject({
              status: 500,
              error: err,
            });
          }

          if (result.length === 0) {
            let sqlInsert =
              'INSERT INTO classes SET user_id = (SELECT user_id FROM users WHERE registration_no = ?), class_code = ?';
            await pool.query(
              sqlInsert,
              [reg_id, classCode],
              (err, result, field) => {
                if (err) {
                  return reject({
                    status: 500,
                    error: err,
                  });
                }
                console.log(result);
                return resolve(result);
              }
            );
          }

          return resolve(result);
        }
      );
    });
  },
};
