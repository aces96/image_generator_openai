const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



const generateImageCallback = async (req, res)=>{

    console.log(req.body.artStyle);
    console.log(req.body.prompt);
        try {
            const generateImage = await openai.createImage({
                prompt: req.body.artStyle+req.body.prompt,
                n: 1,
                response_format: "b64_json"
            })

            const image = generateImage.data.data[0].url

            res.status(200).json({
                success: true,
                image: generateImage.data
            })
        } catch (error) {
            res.send(error.data)
        }
}


module.exports = {generateImageCallback}