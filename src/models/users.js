import con from "../config/config.js";

const getAllUsers = async () => {
  const [rows] = await con.query("SELECT * FROM `user`");
  console.log(rows);
};

const createNewUser = async (username, email, password) => {
  try {
    const [rows] = await con.query(
      "INSERT INTO `user` (username, email, password) VALUES (?, ?, ?)",
      [username, email, password],
    );
    console.log("User created with ID:", rows.insertId);
    return rows.insertId;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

const updateUser = async (idUser, username, email, password) => {
  try {
    const [result] = await con.query(
      "UPDATE `user` SET username = ?, email = ?, password = ? WHERE id = ?",
      [username, email, password, idUser],
    );
    return {
      success: true,
      affectedRows: result.affectedRows,
      message: "Update successful",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Can't update data",
      error: error.message,
    };
  }
};

const deleteUser = async (idUser) => {
  try {
    const [result] = await con.query("DELETE FROM `user` WHERE id=?", [idUser]);
    if (!result) {
      return "data not found";
    }
  } catch (error) {
    console.error(error);
  }
};
export default { getAllUsers, createNewUser, updateUser, deleteUser };
