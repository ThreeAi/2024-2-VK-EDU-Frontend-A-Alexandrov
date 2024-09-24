/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
  if (typeof text === "string") {
    text = [text]; 
  }

  if (Array.isArray(text) && text.every(i => typeof i === "string")) {
    const processedArray = text
      .map(str => str.trim())
      .filter(str => str.length > 0); 

    let result = processedArray.join(" ");

    if (result.charAt(result.length - 1) !== ".") {
      result = result + ".";
    }

    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return false;
}
