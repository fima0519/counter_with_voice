let counter = document.querySelector(".counter");
let speakBtn = document.getElementById("speakBtn");
let count = 0;
let stop;

function countUp() {
  count++;
  counter.innerHTML = count;
  let utterance = new SpeechSynthesisUtterance(counter.innerText);
  speechSynthesis.speak(utterance);

  if (count >= counter.dataset.number) {
    clearInterval(stop);
    let utterance = new SpeechSynthesisUtterance("Finished!");
    speechSynthesis.speak(utterance);
  }
}

speakBtn.addEventListener("click", function () {
  stop = setInterval(function () {
    countUp();
  }, 1500);
});


