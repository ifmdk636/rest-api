import con from "../config/config.js";
import usersModel from "../models/users.js";

const getAllUsers = async (req, res) => {
  try {
    const [rows] = await con.query("SELECT * FROM `user`");
    return res.status(200).json({
      success: true,
      message: "GET Data Success",
      data: rows,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { idUser } = req.params;
    const rows = await usersModel.getUserById(idUser);
    if (!rows) {
      return res.status(400).json({
        message: "Data not found",
      });
    }
    return res.status(200).json({
      message: "Get Data Success",
      data: rows,
    });
  } catch (error) {
    console.error(error);
  }
};

const createNewUser = async (req, res) => {
  const { username, email, password } = req.body;
  const data = await usersModel.createNewUser(username, email, password);
  console.log(data);
  res.json({
    message: "CREATE new user account",
    data: data,
  });
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { username, email, password } = req.body;

  try {
    // Pastikan model menerima idUser juga
    let update = await usersModel.updateUser(idUser, username, email, password);

    if (!update.success || update.affectedRows === 0) {
      return res.status(404).json({
        message: "User tidak ditemukan atau tidak ada perubahan",
      });
    }

    res.status(200).json({
      message: "User berhasil diupdate",
      data: update,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Terjadi kesalahan saat update user",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  const result = await usersModel.deleteUser(idUser);
  res.status(200).json({
    message: "Berhasil di delete",
    data: idUser,
  });
  if (!result) {
    res.status(400).json({
      message: "Data not found!",
      data: result,
    });
  }
};

export default {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
