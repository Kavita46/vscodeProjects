const userModel = require('../models/userModel');

async function register(req, res, next){

// const {username, password, head} = req.body;


const result = await userModel.create(req.body);

res.send({result});



}


async function login(req, res, next){

    // const {username, password, head} = req.body;
    
    
    const result = await userModel.findOne(req.query);
    
    res.send({result, login});
    
    }




module.exports = {register};