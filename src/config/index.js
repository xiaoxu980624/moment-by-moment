let environment =process.env.VUE_APP_ENV || "development"

let config=require('./env.'+environment)
console.log(config);
module.exports=config