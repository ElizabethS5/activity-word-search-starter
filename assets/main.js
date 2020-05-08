let searchButton = document.querySelector("#search-button");
let textBox = document.querySelector("#textbox");
let sentence = document.querySelector("#sentence");
let searchResults = document.querySelector("#search-results");
let original = sentence.innerHTML;

searchButton.addEventListener("click", function () {
  sentence.innerHTML = original;
  const text = sentence.innerText.toLowerCase();
  const userInput = textBox.value.toLowerCase().trim();
  if (!userInput) {
    searchResults.innerHTML = "Enter text in search bar.";
  } else if (text.includes(userInput)) {
    searchResults.innerHTML = "A match was found!";

    //----------------------------------------------
    //Solution that uses .split() and .join()
    //----------------------------------------------
    // const segments = text.split(userInput);

    // const numberOfMatches = segments.length - 1;
    // searchResults.innerHTML += `<br><br>'${userInput}' appears ${numberOfMatches} time${
    //   numberOfMatches > 1 ? "s" : ""
    // }.`;

    // const elementString = `<span class="highlight">${userInput}</span>`;
    // const highlightedText = segments.join(elementString);
    // sentence.innerHTML = highlightedText;

    //----------------------------------------------
    // Solution that uses regular expressions, .match(), and .replace()
    //----------------------------------------------
    const regex = new RegExp(userInput, "gi");
    const numberOfMatches = text.match(regex).length;
    searchResults.innerHTML += `<br><br>'${userInput}' appears ${numberOfMatches} time${
      numberOfMatches > 1 ? "s" : ""
    }.`;
    const elementString = `<span class="highlight">${userInput}</span>`;
    const highlightedSentence = original.replace(regex, elementString);
    sentence.innerHTML = highlightedSentence;
  } else {
    searchResults.innerHTML = "No results. Too bad!";
  }
  textBox.value = "";
});
