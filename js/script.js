let counter = document.querySelector(".counter");
let count = 0;

function countUp() {
  count++;
  counter.innerHTML = count;
  let utterance = new SpeechSynthesisUtterance(counter.innerText);
  speechSynthesis.speak(utterance);

  if (count == counter.dataset.number) {
    clearInterval(stop);
    let utterance = new SpeechSynthesisUtterance("Finished!");
    speechSynthesis.speak(utterance);
  }
}

let stop = setInterval(function () {
  countUp();
}, 1500);
