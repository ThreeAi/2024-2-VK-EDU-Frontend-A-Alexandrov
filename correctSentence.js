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
  let res = "";

  if (Array.isArray(text)) {
    for (const str of text) {
      if (typeof str !== "string") {
        return false;
      }

      if (str.trim().length > 0) {
        res += str.trim() + " "; 
      }
    }
    res = res.trim();
  } else if (typeof text === "string") {
    res = text;
  } else {
    return false;
  }

  if (res.charAt(res.length - 1) !== ".") {
    res = res + ".";
  }

  return res.charAt(0).toUpperCase() + res.slice(1);
}
