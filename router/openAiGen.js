const express = require('express');
const router = express.Router();
const {generateImageCallback} = require('../controllers/openAiContro')


router.post('/generateImage', generateImageCallback)


module.exports = router