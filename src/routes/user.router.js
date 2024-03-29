const { create } = require('../controllers/user.controllers');
const { destroy } = require('../controllers/user.controllers');
const { update } = require('../controllers/user.controllers');
const { getOne } = require('../controllers/user.controllers');
const { getAll } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
	.get(getAll)
	.post(create)
userRouter.route("/:id")
	.get(getOne)
	.delete(destroy)
	.put(update)

module.exports = userRouter;