import express from "express"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(5001 ,()=>{
    console.log('App start on port 5001')
})
