const { Router } = require("express");

const { 
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
  
} = require("../controllers/usersController");

const router = Router();

router.get("/", usuariosGet);

router.post("/", usuariosPost);

router.put("/",usuariosPut);

router.put("/:id",usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;