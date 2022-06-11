const Task = require('../models/taskSchema');

const taskControllers = {
    getAllTasks: async (req, res) => {
        try {
            const tasks = await Task.find({});
            res.status(200).json({ message: 'Success', tasks });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getSingleTask: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            res.status(200).json({ message: 'Success', task });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateTask: async (req, res) => {
        try {
            const newTask = await Task.findOneAndUpdate(
                { _id: req.params.id },
                { $set: { title: req.body.title, description: req.body.description, isDone: req.body.isDone } },
                { new: true }
            );
            res.status(200).json({ message: 'Update Successfully', newTask });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    createTask: async (req, res) => {
        try {
            const newTask = new Task({
                title: req.body.title,
                description: req.body.description,
            });
            await newTask.save();
            res.status(201).json({ message: 'Create Successfully', newTask });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteTask: async (req, res) => {
        try {
            await Task.findOneAndDelete({ _id: req.params.id });
            res.status(200).json({ message: 'Delete Successfully' });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = taskControllers;
