import con from "../config/config.js";
import usersModel from "../models/users.js";

const getAllUsers = async (req, res) => {
  const [data] = await usersModel.getAllUsers();

  res.json({
    message: "GET all users success",
    data: data,
  });
};

const createNewUser = (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  res.json({
    message: "CREATE new user account",
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
