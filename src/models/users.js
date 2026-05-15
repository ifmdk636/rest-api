import con from "../config/config.js";

const getAllUsers = (req, res) => {
  con.query("SELECT * FROM user", function (err, result) {
    if (err) throw err;
  });
};

const createNewUser = async (id, username, email, password) => {
  try {
    const [rows] = await con.query(
      "INSERT INTO `user` (id, username, email, password) VALUES (?, ?, ?, ?)",
      [id, username, email, password],
    );
    console.log("User created with ID:", rows.insertId);
    return rows.insertId;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export default { getAllUsers, createNewUser };
