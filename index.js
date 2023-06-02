const express = require("express");
require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
const { Configuration, OpenAIApi } = require("openai");

const apiKey = process.env.OPENAI_API_KEY;
const organization = process.env.OPENAI_API_ID;
const configuration = new Configuration({
    // organization,
    apiKey,
});
const openai = new OpenAIApi(configuration);

app.post("/ask", async (req, res) => {
    const prompt = req.body.prompt;

    try {
        if (prompt == null) {
            throw new Error("Uh oh, no prompt was provided");
        }

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens: 64,
        });

        const completion = response.data.choices[0].text;

        return res.status(200).json({
            success: true,
            message: completion,
        });
    } catch (error) {
        console.log(error);
    }
});


app.listen(port, () => console.log(`${organization}: Server is running on port http://localhost:${port}/`));