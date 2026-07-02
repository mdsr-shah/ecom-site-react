const db = require("../config/db");

const getAdmin = async () => {

  const result = await db.query(`
    SELECT
      admin_id,
      username,
      email
    FROM admin
    LIMIT 1
  `);

  return result.rows[0];

};

const updateAdmin = async (
  full_name,
  email,
  password
) => {

  await db.query(
    `
    UPDATE admin

    SET

      username=$1,
      email=$2,
      password=$3

    WHERE admin_id=1
    `,
    [
      username,
      email,
      password
    ]
  );

};

module.exports = {

  getAdmin,
  updateAdmin

};