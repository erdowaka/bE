
const Data = require('../Models/SummaryData.models')
const createError = require('http-errors');
const { default: mongoose } = require('mongoose');

module.exports = {
    getAllApbd : async (req, res, next) =>      {
        try {
            const results = await Data.find({},null,{limit : 767}).lean()
            res.send(results)
        } catch (error) {
            logger.error(error.message);
            
        }
        // res.send('getting a list of all kabko');
        },

    createNewApbd: async (req, res, next) =>    {
        try{
            const newData = new Data(req.body)
            const result = await newData.save()
            res.status(200).json({data: result})
            // res.send(result)
        }catch(error)
            {
                console.log(error.message);
                if(error.name === 'ValidationError'){
                    next(createError(422, error.message));
                    return;
                }
                next(error);
            }
        },
    findApbdById: async (req, res, next) =>     {
        const id = req.params.id;
        try {
         const newData = await Data.findById(id);
            if (!newData) {
                throw createError(404, 'Data Tidak Di Temukan');
            }
         res.send(newData);
        } catch(error){
         console.log(error.message);
         if(error instanceof mongoose.CastError){
             next(createError(400, 'Invalid User ID '));
             return;
         }
             }
         },
    
    updateApbdById : async (req, res, next) =>  {
        try {
            const id = req.params.id;
            const updates = req.body;
            const options = {new: true};
    
            const result = await Data.findByIdAndUpdate(id, updates, options);
    
            if (!result){
                throw createError(404, 'Data Tidak Ada');
            }
            res.send(result);  
        } catch (error) {
            console.log(error.message);
            if(error instanceof mongoose.CastError){
                return next(createError(400, 'ID User salah'));
            }
            next(error);
        }
    },

    deleteApbdById : async (req, res, next) =>  {
        const id = req.params.id;
        try {
            const result = await Data.findByIdAndDelete(id);
            if (!result) {
                throw createError(404, 'User Tidak Ada');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if(error instanceof mongoose.CastError){
                next(createError(400, 'User Id Salah'));
                return;
            }
            next(error);
        }
        
    }
}