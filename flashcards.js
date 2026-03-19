// flashcards.js
const flashcardsContainer = document.getElementById('flashcards-container');

// 你的文本数据，这里每条是一个 Q&A
const flashcardsData = [
  { question: "What is the chemical symbol for water?", answer: "H₂O" },
  { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
  { question: "What is 9 x 7?", answer: "63" },
  // 可以把你自己的内容放在这里
];

flashcardsData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${item.question}</div>
      <div class="card-back">${item.answer}</div>
    </div>
  `;

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  flashcardsContainer.appendChild(card);
});
