const textDisplay = document.querySelector("#text");
const speedBtn = document.querySelector("#speed");
const readBtn = document.querySelector(".read");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");

readBtn.addEventListener("click", () => {
  readText(textDisplay.value);
});

const utterance = new SpeechSynthesisUtterance();
pauseBtn.addEventListener("click", pauseText);

stopBtn.addEventListener("click", stopText);

speedBtn.addEventListener("input", () => {
  stopText();
  readText(utterance.text.substring(currentChar));
});

utterance.addEventListener("end", () => {
  textDisplay.disabled = false;
});

utterance.addEventListener('boundary', (e)=>{
  currentChar = e.charIndex
})


function readText(testText) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }

  if (speechSynthesis.speaking) return;

  utterance.text = testText;
  utterance.rate = speedBtn.value || 1;
  textDisplay.disabled = true;
  speechSynthesis.speak(utterance);
}

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
