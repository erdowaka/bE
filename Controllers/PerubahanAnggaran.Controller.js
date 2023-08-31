
const Anggaran = require('../Models/PerubahanAnggaran.models')
const createError = require('http-errors');
const { default: mongoose } = require('mongoose');

module.exports = {
    getAllUser : async (req, res, next) =>      {
        try {
            const results = await Anggaran.find({},null,{limit : 767}).lean()
            res.send(results)
        } catch (error) {
            logger.error(error.message);
            
        }
        // res.send('getting a list of all kabko');
        },

    createNewUser: async (req, res, next) =>    {
        try{
            const newUser = new Anggaran(req.body)
            const result = await newUser.save()
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
    findUserById: async (req, res, next) =>     {
        const id = req.params.id;
        try {
         const anggaran = await Anggaran.findById(id);
            if (!anggaran) {
                throw createError(404, 'User Tidak Di Temukan');
            }
         res.send(anggaran);
        } catch(error){
         console.log(error.message);
         if(error instanceof mongoose.CastError){
             next(createError(400, 'Invalid User ID '));
             return;
         }
             }
         },
    
    updateUserById : async (req, res, next) =>  {
        try {
            const id = req.params.id;
            const updates = req.body;
            const options = {new: true};
    
            const result = await Anggaran.findByIdAndUpdate(id, updates, options);
    
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

    deleteUserById : async (req, res, next) =>  {
        const id = req.params.id;
        try {
            const result = await Anggaran.findByIdAndDelete(id);
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