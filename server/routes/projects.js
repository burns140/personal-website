const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/:filename', async (req, res) => {
    let filename = req.params.filename;
    fs.readFile(`./misc/${filename}.txt`, (err, data) => {
        res.send(data);
    });
})

router.get('/', (req, res) => {
    res.send('Projects page');
});

module.exports = router;