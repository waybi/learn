const originalText = "Hey dude, how is it going?";

let wordOnlyText = "";

for (let i = 0; i < originalText.length; i++) {
  const letter = originalText[i];
  const asciiCode = letter.charCodeAt();

  if (
    (asciiCode >= 65 && asciiCode <= 90) ||
    (asciiCode >= 97 && asciiCode <= 122) ||
    asciiCode === 32
  ) {
    wordOnlyText += letter;
  }
}

const lowerCaseText = wordOnlyText.toLowerCase();
const words = lowerCaseText.split(" ");
console.log(words);

