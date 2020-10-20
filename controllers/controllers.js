const index = require('./index');

const router = require('express').Router

exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "menu content can not be empty"
        });
    }

    // Create a Note
    const menu = new Menu({
        title: req.body.title || "New Menu", 
        content: req.body.content
    });

    // Save Note in the database
    menu.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Menu."
        });
    });
};

// Retrieve and return all foods from the database.
exports.findAll = (req, res) => {
    Menu.find()
    .then(menu => {
        res.send(menu);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Menu."
        });
    });
};

// Find a single food with a noteId
exports.findOne = (req, res) => {
    Note.findById(req.params.noteId)
    .then(menu => {
        if(!menu) {
            return res.status(404).send({
                message: "food not found with id " + req.params.noteId
            });            
        }
        res.send(menu);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "food not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving food with id " + req.params.noteId
        });
    });
};

// Update a food identified by the foodId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Food content can not be empty"
        });
    }

    // Find food and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};

// router.get('/order-food', (req, res) => {
//   res.json( )
// })
// router.put('/order-food', (req, res) => {
//   res.json()
// })

// router.get('/payment', (req, res) => {
//     res.json()
// })
// router.post('/payment', (req, res) => {
//   res.json()
// })
// router.get("/", (req, res) => {
//    res.json() // handle root
// })

// // route to get menu
// router.get('/food-menu', (req, res) => {
//   res.json()
// })

module.exports = router