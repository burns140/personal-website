const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/getinfo/:projectname', async (req, res) => {
    let projectName = req.params.projectname;
    fs.readFile(`./misc/${projectName}.json`, (err, data) => {
        res.json(JSON.parse(data));
    })
})

router.get('/:filename', async (req, res) => {
    let filename = req.params.filename;
    fs.readFile(`./misc/${filename}.txt`, (err, data) => {
        res.send(data);
    });
})

// router.get('/', (req, res) => {
//     res.send('Projects page');
// });

module.exports = router;