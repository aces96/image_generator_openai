const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const openaiRoute = require('./router/openAiGen')


const app = express()

app.use(cors());

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/openai', openaiRoute)

app.listen(port, ()=>{
    console.log('Server started on port'+port);
})