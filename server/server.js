const express = require('express');
const cors = require('cors');

const PORT = 9000;

const app = express();
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
});