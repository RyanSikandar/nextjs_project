// const {username,password}=process.env;
const username = process.env.username
const password = process.env.password 
 export const connection= "mongodb://ryansikandar123:"+password+"@ac-rpq18lg-shard-00-00.kkbvza9.mongodb.net:27017,ac-rpq18lg-shard-00-01.kkbvza9.mongodb.net:27017,ac-rpq18lg-shard-00-02.kkbvza9.mongodb.net:27017/productDB?ssl=true&replicaSet=atlas-brj2tb-shard-0&authSource=admin&retryWrites=true&w=majority"