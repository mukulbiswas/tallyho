const express = require('express')
const router = express.Router()

const birdsData = [
    {id: 1, name: 'Domestic sparrow', native: 'Worldwide'},
    {id: 2, name: 'Bald eagle', native: 'North America'},
    {id: 3, name: 'Peacock', native: 'India'},
    {id: 4, name: 'Ostrich', native: 'African savannah'},
    {id: 5, name: 'Kiwi', native: 'New Zealand'}
]

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.route('/')
    .get((req, res, next) => {
        res.json(birdsData);
        res.status(200).send();
    })
    .post(function(req, res, next){
        res.json(req.body).status(200).send();
    })
    
// define the about route
router.get('/about', (req, res) => {
    res.json({title: 'About birds'});
    res.status(200).send();
})

module.exports = router