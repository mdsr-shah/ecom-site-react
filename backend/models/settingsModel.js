const db = require("../config/db");

const getAdmin = async () => {

  const result = await db.query(`
    SELECT
      admin_id,
      full_name,
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

      full_name=$1,
      email=$2,
      password=$3

    WHERE admin_id=1
    `,
    [
      full_name,
      email,
      password
    ]
  );

};

module.exports = {

  getAdmin,
  updateAdmin

};