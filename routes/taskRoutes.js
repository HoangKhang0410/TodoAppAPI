const express = require('express');
const router = express.Router();
const taskControllers = require('../controllers/taskControllers');

router.get('/getAllTasks', taskControllers.getAllTasks);
router.get('/getSingleTask/:id', taskControllers.getSingleTask);
router.post('/createTask', taskControllers.createTask);
router.patch('/updateTask/:id', taskControllers.updateTask);
router.delete('/deleteTask/:id', taskControllers.deleteTask);

module.exports = router;
