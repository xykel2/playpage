const poetryLineElement = document.getElementById("poetry-line");
const newLineButton = document.getElementById("new-line");

async function getRandomLine() {
  try {
    // Fetch random poem from PoetryDB
    const response = await fetch("https://poetrydb.org/random");
    const poems = await response.json();

    if (!poems || !poems.length) {
      poetryLineElement.textContent = "Couldn't find any poems.";
      return;
    }

    const poem = poems[0];
    const randomLine = poem.lines[Math.floor(Math.random() * poem.lines.length)];
    poetryLineElement.textContent = `"${randomLine}" — ${poem.author}`;
  } catch (error) {
    poetryLineElement.textContent = "Error fetching poetry. Try again!";
    console.error(error);
  }
}

newLineButton.addEventListener("click", getRandomLine);

// Load one line when the page first loads
getRandomLine();
