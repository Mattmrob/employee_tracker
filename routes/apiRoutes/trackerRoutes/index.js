const router = require('express').Router();
const { listAll } = require('../../../controllers/trackController')
// const { getTodos, createTodo, updateTodoById, deleteTodoById, getTodoById } = require("../../../controllers/todosController")
// example from previous project, need to destructure controllers from controller folder

// router.get('/', getTodos);
// router.post('/', createTodo);

// router.route('/')
//     .get(listAll);

// // for doing anything to a specific row in our table
// router.route('/:id')
//     .get(getTodoById)
//     .put(updateTodoById)
//     .delete(deleteTodoById);

module.exports = router;