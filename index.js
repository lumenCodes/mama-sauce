const express = require('express');
const path = require('path');
const members = require('./members');

const app = express();


// creatring a page more like sending a htmlfile
// app.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     //res.send("hello world")
// })

// set a static folder so that there is no ned for routing for every single page I create.
app.use(express.static(path.join(__dirname, 'public')))

// route gets all members
app.get('/api/members', (req, res) => res.json(members))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log (`Server started on port ${PORT}`))
