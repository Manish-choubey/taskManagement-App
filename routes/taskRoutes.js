const express = require('express');
const {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask,
    filterTasksByStatus,
} = require('../controllers/taskController');

const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.get('/tasks/status/:status', filterTasksByStatus);

module.exports = router;