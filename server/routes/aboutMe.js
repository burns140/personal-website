const express = require('express');
const fs = require('fs');

const router = express.Router();

// router.get('/', (req, res) => {
//     fs.readFile('./misc/about-me.txt', (err, data) => {
//         res.set("Content-Type", "text/plain");
//         res.send(data);
//     });
// })

module.exports = router;