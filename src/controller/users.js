import con from "../config/config.js";
import usersModel from "../models/users.js";

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers();
  } catch (error) {
    console.error(error);
  }
};

const createNewUser = async (req, res) => {
  const { id, username, email, password } = req.body;
  const data = await usersModel.createNewUser();
  console.log(data);
  res.json({
    message: "CREATE new user account",
    data: data,
  });
};

const udpateUser = (req, res) => {
  const { idUser } = req.params;
  console.log(idUser);
  res.status(202).json({
    data: idUser,
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "Berhasil di delete",
    data: {
      id: id.data,
      name: "Faris",
      usia: "20 Tahun",
    },
  });
};

export default { getAllUsers, createNewUser, udpateUser, deleteUser };
