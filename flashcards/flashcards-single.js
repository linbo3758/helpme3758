// 定义不同套闪卡
const flashcardSets = {
  chemistry: [
    { question: "H₂O is?", answer: "Water" },
    { question: "NaCl is?", answer: "Salt" },
  ],
  physics: [
    { question: "Speed of light?", answer: "3x10^8 m/s" },
    { question: "F = ma?", answer: "Force = mass x acceleration" },
  ],
  math: [
    { question: "9 x 7?", answer: "63" },
    { question: "Square root of 16?", answer: "4" },
  ]
};

let currentSet = [];
let currentIndex = 0;

const cardInner = document.getElementById("card-inner");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");

function showCard(index) {
  if (currentSet.length === 0) {
    cardFront.textContent = "Select a set";
    cardBack.textContent = "";
    return;
  }
  cardFront.textContent = currentSet[index].question;
  cardBack.textContent = currentSet[index].answer;
  cardInner.classList.remove("flipped");
}

// 加载指定套卡片
function loadSet(setName) {
  currentSet = flashcardSets[setName];
  currentIndex = 0;
  showCard(currentIndex);
}

// 按钮事件
document.getElementById("flip").addEventListener("click", () => {
  cardInner.classList.toggle("flipped");
});

document.getElementById("next").addEventListener("click", () => {
  if (currentSet.length === 0) return;
  currentIndex = (currentIndex + 1) % currentSet.length;
  showCard(currentIndex);
});

// 初始化显示
showCard(currentIndex);
