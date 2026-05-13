import con from "../config/config.js";

const getAllUsers = () => {
  con.query("SELECT * FROM user", (err, rows) => {
    if (err) {
      res.json({
        message: "gagal koneksi",
      });
    }
    res.json({
      message: "connection success",
      data: rows,
    });
  });
};

const 

export default getAllUsers;
