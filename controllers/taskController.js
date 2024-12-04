const Task = require('../models/taskModel');
const { v4: uuidv4 } = require('uuid');

// Create a Task
exports.createTask = async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    try {
        const newTask = new Task({
            id: uuidv4(),
            title,
            description,
        });
        await newTask.save();
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        res.status(500).json({ error: 'Error creating task', details: error.message });
    }
};

// Get All Tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tasks', details: error.message });
    }
};

// Update a Task
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'completed'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
    }

    try {
        const task = await Task.findOneAndUpdate({ id }, { status }, { new: true });

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
        res.status(500).json({ error: 'Error updating task', details: error.message });
    }
};

// Delete a Task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findOneAndDelete({ id });

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting task', details: error.message });
    }
};

// Filter Tasks by Status
exports.filterTasksByStatus = async (req, res) => {
    const { status } = req.params;

    const validStatuses = ['pending', 'completed'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
    }

    try {
        const tasks = await Task.find({ status });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error filtering tasks', details: error.message });
    }
};
