const usersRouter = require("express").Router();
const validInfo = require("../middlewares/validInfo");
const queries = require("../queries");

usersRouter.post("/signup", validInfo, queries.register);

usersRouter.post("/login", validInfo, queries.login);

module.exports = usersRouter;