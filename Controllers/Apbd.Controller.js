
const Apbd = require('../Models/Apbd.models')
const createError = require('http-errors');
const { default: mongoose } = require('mongoose');

module.exports = {
    getAllApbd : async (req, res, next) =>      {
        try {
            const results = await Apbd.find({},null,{limit : 767}).lean()
            res.send(results)
        } catch (error) {
            logger.error(error.message);
            
        }
        // res.send('getting a list of all kabko');
        },

    createNewApbd: async (req, res, next) =>    {
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
    findApbdById: async (req, res, next) =>     {
        const id = req.params.id;
        try {
         const Apbd = await Apbd.findById(id);
            if (!Apbd) {
                throw createError(404, 'Data Tidak Di Temukan');
            }
         res.send(Apbd);
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

    deleteApbdById : async (req, res, next) =>  {
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