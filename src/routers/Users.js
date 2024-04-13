const { Router } = require("express");
const getAllUsers = require("../Controllers/getAllUsers");
const createUser = require("../Controllers/postUsers");

const router = Router();

router.get("/users", async (req, res) => {
  // const users = await getAllUsers();
  // res.status(200).json(users);
   res.send("users")
});
router.post("/users", async (req, res) => {
  try {
    const userdata = req.body[0];
    const newUsers = await createUser(userdata);
    res.status(200).json(newUsers);
  } catch (error) {
    res.send(error.detail);
  }
});
router.get("/paises", async (req, res) => {
  // const users = await getAllUsers();
  //    res.status(200).json(users)
  res.send("paises");
});
module.exports = router;
