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
                size: "512x512",
            })

            const image = generateImage.data.data[0].url

            res.status(200).json({
                success: true,
                image: image
            })
        } catch (error) {
            res.status(400).send(error)
        }
}


module.exports = {generateImageCallback}