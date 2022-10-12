const Toppings = require('./toppings-model')
const router = require('express').Router()

// works
router.get('/', (req, res) => {
    Toppings.find(req.query)
    .then(toppings => {
        res.status(200).json(toppings)
    })
    .catch(err => {
        res.status(500).json({
        message: 'canot get toppings'
        })
    })

}) // return an array of all items

//works
router.get('/:id', (req, res) => {
    Toppings.findById(req.params.id)
    .then(toppings => {
        if(toppings) {
        res.status(200).json({toppings})
        } else {
            res.status(404).json({
            message: 'toppings not found'
            })
        }
    })
    .catch(err => {
        console.log("failure", error)
        res.status(500).json({
        message: 'Error retrieving toppings'
        })
    })
});  // return the item object with the matching id (working)


router.post('/',  (req, res) => {
    Toppings.add(req.body)
    .then(toppings => {
        console.log("success",req.body)
        res.status(201).json(toppings)
    })
    .catch(error => {
        console.log("failure, but works somehow", error)
        res.status(200).json({
        message: error
        });
    });
}) // return the added item object

// works
router.delete('/:id', (req, res) => {
    Toppings.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({
                message: 'toppings has been removed'
            }) 
        } else {
            res.status(404).json({
                message: 'toppings cannot be found'
            })
        }
    })
    .catch(error => {
        res.status(500).json({
        message: 'Error removing the item',
        });
});
})

// works
router.put('/:id', (req, res) => {
    const changes = req.body
    Toppings.update(req.params.id, changes)
    .then(toppings => {
        if(toppings) {
            res.status(200).json({
                message: 'toppings has been updated'
            })
        } else {
            res.status(404).json({
                message: 'toppings could not be found'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error updating toppings'
        })
    })
}) // returns item object

module.exports = router