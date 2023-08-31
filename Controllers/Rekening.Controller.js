
const rekening= require('../Models/Rekening.models')
const createError = require('http-errors');
const { default: mongoose } = require('mongoose');

module.exports = {
    getAllRekening : async (req, res, next) =>      {
        try {
            const results = await rekening.find({},null,{limit : 767}).lean()
            res.send(results)
        } catch (error) {
            logger.error(error.message);
            
        }
        // res.send('getting a list of all kabko');
        },

    createNewRekening: async (req, res, next) =>    {
        try{
            const newRekening = new rekening(req.body)
            const result = await newRekening.save()
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
    findRekeningById: async (req, res, next) =>     {
        const id = req.params.id;
        try {
         const rekening = await rekening.findById(id);
            if (!rekening) {
                throw createError(404, 'User Tidak Di Temukan');
            }
         res.send(rekening);
        } catch(error){
         console.log(error.message);
         if(error instanceof mongoose.CastError){
             next(createError(400, 'Invalid User ID '));
             return;
         }
             }
         },
    
    updateRekeningById : async (req, res, next) =>  {
        try {
            const id = req.params.id;
            const updates = req.body;
            const options = {new: true};
    
            const result = await rekening.findByIdAndUpdate(id, updates, options);
    
            if (!result){
                throw createError(404, 'User Tidak Ada');
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

    deleteRekeningById : async (req, res, next) =>  {
        const id = req.params.id;
        try {
            const result = await rekening.findByIdAndDelete(id);
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