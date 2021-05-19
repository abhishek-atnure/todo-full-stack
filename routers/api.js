const express = require("express");
const apiRouter = express.Router();

const authRouter = require("./authRouter");
const todosRouter = require("./todosRouter")
const usersRouter = require("./usersRouter");


apiRouter.use("/auth", authRouter);
apiRouter.use("/user", usersRouter);
apiRouter.use("/todo", todosRouter);


module.exports = apiRouter;