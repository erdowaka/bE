
const Apbd = require('../Models/SummaryApbd.models')
const createError = require('http-errors');
const { default: mongoose } = require('mongoose');

module.exports = {
    getAllSummary : async (req, res, next) =>      {
        try {
            const results = await Apbd.find({},null,{limit: 10}).lean()
            res.send(results)
        } catch (error) {
            logger.error(error.message);
            
        }
        // res.send('getting a list of all kabko');
        },

    createNewSummary: async (req, res, next) =>    {
        try{
            const newApbd = new Apbd(req.body)
            const result = await newApbd.save()
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
    findSummaryById: async (req, res, next) =>     {
        const id = req.params.id;
        try {
         const dataApbd = await Apbd.findById(id);
            if (!dataApbd) {
                throw createError(404, 'Data Tidak Di Temukan');
            }
         res.send(dataApbd);
        } catch(error){
         console.log(error.message);
         if(error instanceof mongoose.CastError){
             next(createError(400, 'Invalid User ID '));
             return;
         }
             }
         },
    
    updateSummaryById : async (req, res, next) =>  {
        try {
            const id = req.params.id;
            const updates = req.body;
            const options = {new: true};
    
            const result = await Apbd.findByIdAndUpdate(id, updates, options);
    
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

    deleteSummaryById : async (req, res, next) =>  {
        const id = req.params.id;
        try {
            const result = await Apbd.findByIdAndDelete(id);
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