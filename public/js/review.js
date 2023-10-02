/* to install Node.js library: npm install openai@^4.0.0 */
/* API endpoint:
POST https://api.openai.com/v1/chat/completions
Authorization: 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
*/

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);
/* userText code will be updated to pull in user input from text box once API is functional */
const userText = "Test run."

async function main() {
  try {
    const response = await chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        { "role": "system", "content": "Provide feedback on spelling and grammar in the provided text."},
        {"role": "user", "content": userText},
        ],
        max_tokens: 800,
    });
    console.log(response.data.choices[0].text.trim());
  } catch (error) {
        console.error(error);
  }
}

main();

module.exports = {Configuration, OpenAIAPI};

/* Link API call to submission button once API successfully linked 
const submit = document.getElementById("#submit-button");
const = document.getElementById("#reviewed");
submit.addEventListener("click", function() {
    main();
    function output() {}

} */
