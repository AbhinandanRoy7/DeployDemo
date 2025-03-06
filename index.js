import express from "express";
const app = express();
const port = process.env.PORT || 4000;

app.get('/abhinandan',(req,res)=>{
    res.send("Welcom to home Page!!")
});

app.listen(port,()=>{console.log(`Running at post- ${port}`)});
