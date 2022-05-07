// Here we will create our routes for our endpoints

const express = require('express');
const Model = require('../model/model')
const router = express.Router();

module.exports = router; // Here, we are exporting the router in order to use it outside of this file.

/*  We'll now write our endpoints which will be the following
 *   1. Posting data to Database.
 *   2. Getting all the data from the Database.
 *   3. Getting data based on the ID.
 *   4. Updating data based on the ID.
 *   5. Deleting data based on the ID.
 * 
 * NOTES: 
 *  - REST methods format: router takes route as first parameter(This is custom and is something we set ourselves), followed by its callback, which is whatever response we want it to send back
 *  - res means response and is the response that we end back to our client (or any front-end client) or any other service (eg. Postman)
 *  - req means request and is the request that we receive from our client (or any front-end client) or services like Postman
 */


// Post
router.post('/post', async (req, res) => {
    const data = new Model({
        question: req.body.question,
        answer: req.body.answer
    });

    try {
        const new_data = await data.save(); // NB! This is an database operation! Always remember to wait for the completion thereof!
        res.status(200).json(new_data);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

// Get All
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// Get by ID
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// Update by ID
router.patch('/update/:id', async (req, res) => {
    try {
        const id  = req.params.id;
        const updated_data = req.body;
        const options = {new: true} // Not quite sure what this is -- investigate
        const result = await Model.findByIdAndUpdate(
            id, updated_data, options
        );

        res.send(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

// Delete by ID 
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);

        res.send(`Question ${JSON.stringify(data)} with id ${id} has been deleted...`)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});
