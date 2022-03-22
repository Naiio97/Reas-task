const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//GET ALL API
router.get('/lead',  async (req, res) => {
    try {
        const data = await Model.find()
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error})
    }

})

//GET by ID API
router.get('/lead/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id)
        res.json(data)
    }
    catch (error) { 
        res.status(500).json({message: error})
    }
})
 
//POST API
router.post('/post', async (req, res) => {
         const data = new Model ({
            estateType: req.body.estateType,
            fullName: req.body.fullName,
            phone: req.body.phone,
            email: req.body.email,
            region: req.body.region,
            district: req.body.district
        })
    
    

    try{
        const dataToSave = await data.save()
        res.status(200).json(data)
    }
    catch(error){
        res.status(400).json({message: error.message})

    }
})

//PUT API
router.put('/put/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dataToUpdate = req.body
        const options = {new: true}

        const result = await Model.findByIdAndUpdate (
            id, dataToUpdate, options)
        
        res.send(result)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
})

//DELETE API
router.delete('/delete/:id', async (req, res) => {
    try {
        await Model.findByIdAndDelete(req.params.id)
        res.send(`${req.params.id} byl smazán.`)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
  
})
module.exports = router;