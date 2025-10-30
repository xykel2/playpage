const titleEl = document.getElementById("poem-title");
const authorEl = document.getElementById("poem-author");
const textEl = document.getElementById("poem-text");
const newPoemBtn = document.getElementById("new-poem");

async function getRandomPoem() {
  try {
    titleEl.textContent = "Loading...";
    authorEl.textContent = "";
    textEl.textContent = "";

    const response = await fetch("https://poetrydb.org/random");
    const poems = await response.json();

    if (!poems || !poems.length) {
      titleEl.textContent = "Couldn't find any poems.";
      return;
    }

    const poem = poems[0];
    titleEl.textContent = poem.title || "Untitled";
    authorEl.textContent = poem.author ? `by ${poem.author}` : "";
    textEl.textContent = poem.lines.join("\n");
  } catch (error) {
    titleEl.textContent = "Error fetching poem";
    authorEl.textContent = "";
    textEl.textContent = "Try again later.";
    console.error(error);
  }
}

newPoemBtn.addEventListener("click", getRandomPoem);

// Load one poem on first visit
getRandomPoem();
