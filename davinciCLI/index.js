const openai = require('openai'); 
// To retrieve an API Key, sign up on https://openai.com (e-mail and phone number required) 
const config = new openai.Configuration({
	apiKey: 'YOUR_API_KEY'
}); 

const api = new openai.OpenAIApi(config); 

const prompt = process.argv.slice(2)[0];

if(!prompt) {
    return console.log("Error: Please add your prompt wrapped in quotes");
}


async function run() {
   await api.createCompletion({
        model: 'text-davinci-003', 
        max_tokens: 1024, 
        prompt: prompt,
    }).then((response) => {
        console.log(response.data.choices[0].text.replace(/^\\n+/, ''));
    })
}

run(); 
