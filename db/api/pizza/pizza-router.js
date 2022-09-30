const Pizza = require('./pizza-model')
const router = require('express').Router()
// works
router.get('/', (req, res) => {
    Pizza.find(req.query)
    .then(pizza => {
        res.status(200).json(pizza)
    })
    .catch(err => {
        res.status(500).json({
            message: 'cannot get pizza'
        })
    })

}) // return an array of all items

//works
router.get('/:id', (req, res) => {
    Pizza.findById(req.params.id)
    .then(pizza => {
        if(pizza) {
            res.status(200).json({pizza})
        } else {
            res.status(404).json({
                message: 'Recipe not found'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error retrieving pizza'
        })
    })
});  // return the item object with the matching id (working)


router.post('/', (req, res) => {
    Pizza.add(req.body)
    .then(pizza => {
        console.log("success",req.body)
        res.status(201).json(pizza)
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
    Pizza.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({
                message: 'Recipe has been removed'
            }) 
        } else {
            res.status(404).json({
                message: 'Recipe cannot be found'
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
    console.log(req.body)
   const changes = req.body
    Pizza.update(req.params.id, changes)
    .then(pizza => {
        if(pizza) {
            res.status(200).json({
                message: 'Recipe has been updated'
            })
        } else {
            res.status(404).json({
                message: 'Recipe could not be found'
            })
        }
    })
    .catch(err => {
        console.log('falied', err)
        res.status(500).json({
            message: 'Error updating pizza'
        })
    })
}) // returns item object

module.exports = router