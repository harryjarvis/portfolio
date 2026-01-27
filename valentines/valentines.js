const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const valGif = document.getElementById("valGif");
const valText = document.getElementById("valText");
const valButtons = document.getElementById("valButtons");

const noPhrases = [
  "No",
  "Are you sure?",
  "Really sure??",
  "Come on 😭",
  "Don’t do this to me",
  "Last chance!",
  "Ok you’re breaking my heart 💔",
  "Fine... click yes then"
];

let noClickCount = 0;

function growYesButton() {
  const baseSize = 16;        
  const growBy = 4;              
  const newSize = baseSize + noClickCount * growBy;

  yesBtn.style.fontSize = `${newSize}px`;
  yesBtn.style.padding = `${10 + noClickCount * 2}px ${18 + noClickCount * 4}px`;
}

noBtn.addEventListener("click", () => {
  noClickCount++;

  const phraseIndex = Math.min(noClickCount, noPhrases.length - 1);
  noBtn.textContent = noPhrases[phraseIndex];

  growYesButton();
});

yesBtn.addEventListener("click", () => {

  valGif.src = "./images/fireworks.gif";
  valGif.alt = "Yay!";

  valText.textContent = "";

  valButtons.remove();
});