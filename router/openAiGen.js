const express = require('express');
const router = express.Router();
const {generateImageCallback} = require('../controllers/openAiContro')


router.post('/generateImage', (req,res)=>{
    console.log(res);
})


module.exports = router