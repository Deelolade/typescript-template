import express from "express"

const app= express();
const PORT = 3000 

app.get("/", (req, res)=>{
    res.json("hello world")
})

app.listen(PORT, (res)=>{
    console.log(`app is running on http://localhost:${PORT}`)
})