const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envPath });

const { Configuration, OpenAIApi } = require("openai");

const apiKey = process.env.OPENAI_API_KEY;
const organization = process.env.OPENAI_API_ID;

const configuration = new Configuration({
    organization,
    apiKey,
});

const openai = new OpenAIApi(configuration);

// async function fetchData() {
//     const response = await openai.listEngines();
//     // Rest of your code that depends on the response
// }

// fetchData();
console.log(`${envPath}`);

console.log(`${apiKey}`);