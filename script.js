let boxes = document.querySelectorAll(".box");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let win = document.querySelector("h2");
let resetBtn = document.querySelector(".resetBtn");
boxes.forEach((box) => {
  p1.style.color = "cyan"
  box.addEventListener("click", () => {
    if (p1.style.color == "cyan") {
      box.innerHTML = "X"
      p1.style.color = "#000";
      p2.style.color = "cyan";
    } else {
       box.innerHTML = "O"
      p1.style.color = "cyan"
      p2.style.color = "#000";
    }
    box.disabled = true;
    winner();
  })
});
let winnerPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

const winner=() => {
  winnerPattern.forEach((pattern) => {
    let pat1 = boxes[pattern[0]].innerText;
    let pat2 = boxes[pattern[1]].innerText;
    let pat3 = boxes[pattern[2]].innerText;
    if (pat1 == pat2 && pat2 == pat3 && pat1!="") {
      win.innerText = `Winner:${pat1}`;
       resetBtn.innerText = "New Game";
    } 
    if (pat1 == pat2 && pat2 == pat3 && pat1!="") { 
       boxes.forEach((box) => {
         box.disabled = true;
       })
    }
  })
}
resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
    resetBtn.innerText = "reset";
  })
  win.innerText = `Winner:`;
})

 