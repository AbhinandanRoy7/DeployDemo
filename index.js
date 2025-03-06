import express from "express";
const app = express();
const PORT = 5000;

app.get('/abhinandan',(req,res)=>{
    res.send("Welcom to home Page!!")
});

app.listen(PORT,()=>{console.log(`Running at post- ${PORT}`)});
