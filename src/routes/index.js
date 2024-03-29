const express = require('express');
const userRouter = require('./user.router') // la importamos
const router = express.Router();

// colocar tus rutas aquí
router.use("/users", userRouter); // la ejecutamos

module.exports = router;