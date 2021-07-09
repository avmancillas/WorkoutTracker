const router = require("express").Router();
const path = require("path");

module.exports = function(app){
   app.get("/exercise",(req,res)=>{
    console.log(`app.get"/": ${__dirname}`);
    res.sendFile(path.join(__dirname, 'public','assets','exercise.html'));
   });

   router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'public','assets','index.html'));
   });

   router.get("/stats", (req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'assets','stats.html'));
   });


};