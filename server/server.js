require('dotenv').config(); // This should be the first line
const express = require("express");
const toDoRoutes = require('./routes/todoRoutes');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; 

// Connect to MongoDB
connectDB(process.env.MONGO_URI);

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));


app.use('/todos', toDoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
