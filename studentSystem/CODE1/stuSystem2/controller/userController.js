const userModel = require("../models/userModel");

async function register(req, res, next) {
  const { username, password } = req.body;
  // userModel.create({username, password});

  // Promise MongoDB操作数据库 是异步操作,用await等待, await又需要用async
  const result = await userModel.create(req.body);

  console.log(result);

  // resolve(result);
  res.send("respond with a resource");
}

async function register(req, res, next) {
    const { username, password } = req.query;
    // userModel.create({username, password});
  
    // Promise MongoDB操作数据库 是异步操作,用await等待, await又需要用async
    const result = await userModel.create(req.query);
  
    console.log(result);
  
    // resolve(result);
    res.send("respond with a resource");
  }

module.exports = { register };
