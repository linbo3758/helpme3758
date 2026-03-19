// flashcards-single.js

const flashcards = [
  { 
    question: "Explain how water's molecular structure leads to hydrogen bonding and how that affects its boiling point and surface tension.", 
    answer: "Water molecules are polar, with a positive hydrogen end and negative oxygen end. This allows hydrogen bonds to form between molecules, increasing boiling point and surface tension." 
  },
  { 
    question: "Describe the process of photosynthesis, including the light-dependent and light-independent reactions.", 
    answer: "Photosynthesis converts light energy into chemical energy. Light-dependent reactions generate ATP and NADPH, while the Calvin cycle (light-independent) uses them to fix CO₂ into glucose." 
  },
  { 
    question: "Discuss the impact of Newton's second law in understanding acceleration and force in various contexts.", 
    answer: "Newton's second law states F = ma. It allows us to calculate acceleration from applied force and mass, explaining motion from car engines to falling objects." 
  }
];

let currentIndex = 0;

const cardInner = document.getElementById("card-inner");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");

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
