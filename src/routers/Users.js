const { Router } = require("express");
const getAllUsers = require("../Controllers/getAllUsers");
const createUser = require("../Controllers/postUsers");

const router = Router();

router.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json(users);
  // res.send("users")
});
router.post("/users", async (req, res) => {
  try {
    const userdata = req.body; // en el caso de postgres local poner req.body[0]
    console.log(userdata)
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

router.put("/users/:usersID", async (req, res) => {
  try {
    const usersID = req.params.usersID;
    // const userData = req.body; 
    console.log(usersID)
    res.send(usersID)

  } catch (error) {
    
  }
})
module.exports = router;
