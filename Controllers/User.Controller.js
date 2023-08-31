const user = require('../Models/User.models')
const createError = require('http-errors');
const { default: mongoose } = require('mongoose');

module.exports = {
    getAllUser : async (req, res, next) =>      {
        try {
            const results = await user.find({},null,{limit : 767}).lean()
            res.send(results)
        } catch (error) {
            logger.error(error.message);
            
        }
        // res.send('getting a list of all kabko');
        },
    signin : async (req, res, next) =>      {
        //  const userName = req.body.username
        //  const pwd = req.body.password
        const query = user.where({nip: req.body.username, password: req.body.password})
        //console.log('request: ', req.body)
        try {
                const results = await query.findOne().lean()
                //console.log(results)
                if (!results) {
                    return res.status(404).send({message: "User Tidak Ada"});
                }

                // const passwordIsValid = compareSync(req.body.password,username.password);

                // if (!passwordIsValid) {
                //     return res.status(401).send({
                //         message: "Invalid Password!",
                //     });
                // }
                return res.send(results)

            } catch (error) {
                logger.error(error.message);
                
            }
            // res.send('getting a list of all kabko');
            },
    createNewUser: async (req, res, next) =>    {
        try{
            const newUser = new user(req.body)
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
        // const id = req.params.id;
        try {
         const user = await user.findOne({ _id: req.params.id});
            if (!user) {
                throw createError(404, 'User Tidak Di Temukan');
            }
         res.send(user);
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
    
            const result = await user.findByIdAndUpdate(id, updates, options);
    
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
            const result = await user.findByIdAndDelete(id);
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