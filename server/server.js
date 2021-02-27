const express = require('express');
const cors = require('cors');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'client/public');
const projects = require('./routes/projects.js');

const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
});

app.use('/projects', projects);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})