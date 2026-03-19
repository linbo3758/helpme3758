// 定义你的闪卡数据（Question / Answer）
const flashcards = [
  { question: "Conflict in society", answer: "Speaker exposes the inequality in society between classes. },
  { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
  { question: "9 x 7?", answer: "63" },
  { question: "Square root of 16?", answer: "4" }
  // 你可以继续添加更多
];

let currentIndex = 0;

const cardInner = document.getElementById("card-inner");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");

// 显示当前卡片
function showCard(index) {
  cardFront.textContent = flashcards[index].question;
  cardBack.textContent = flashcards[index].answer;
  cardInner.classList.remove("flipped");
}

// 初始化显示第一张
showCard(currentIndex);

// 翻转按钮
document.getElementById("flip").addEventListener("click", () => {
  cardInner.classList.toggle("flipped");
});

// 下一张按钮
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showCard(currentIndex);
});
