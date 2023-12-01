const express = require('express');
const router = express.Router();
const toDo = require('../models/todo')

// GET all to-do items
router.get('/', async (req, res) => {
    try {
        const toDos = await toDo.find(); // Fetch all to-dos from the database
        res.json(toDos); // Send the to-dos in the response
    } catch (err) {
        res.status(500).json({ message: err.message }); // Send error response if something goes wrong
    }
});


//ADD a to do item
router.post('/', async (req, res) => {
    try {
        const { title, dueDate, priority } = req.body; // Extract data from request body
        const newToDo = new toDo({
            title,      // Assuming these fields exist in your ToDo model
            dueDate,
            priority
        });

        const savedToDo = await newToDo.save(); // Save the to-do item to the database
        res.status(201).json(savedToDo); // Send the saved to-do back in the response
    } catch (err) {
        res.status(400).json({ message: err.message }); // Send error response if something goes wrong
    }
});
module.exports = router;