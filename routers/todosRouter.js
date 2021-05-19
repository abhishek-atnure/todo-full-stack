const todosRouter = require("express").Router();
const queries = require("../queries");

todosRouter.get("/:user_id", queries.getAllTodos);

todosRouter.post("/:user_id", queries.createTodo);

todosRouter.put("/:user_id", queries.updateTodo);

todosRouter.delete("/", queries.deleteTodo);

module.exports = todosRouter;