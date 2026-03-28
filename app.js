const questions = [
  "What is your favorite food?",
  "What is your favorite leisure activity?",
  "What is your first WSQ course?",
  "What skill would you like to learn next?",
  "What do you enjoy doing on weekends?",
  "What is one interesting fact about yourself?",
  "What is your dream job?",
  "What motivates you to learn new skills?",
  "What is your favorite movie or show?",
  "If you could travel anywhere, where would you go?",
  "What is a hobby you recently picked up?",
  "What is your biggest learning goal this year?",
  "What is your favorite tech tool or app?",
  "Who inspires you the most?",
  "What is one skill everyone should learn?",
  "What was the last book you read?",
  "If you could have dinner with anyone, who would it be?",
  "What is your hidden talent?",
  "What is your favorite way to relax after work?",
  "What would you do if you had an extra hour each day?",
];

const cards = [
  {
    label: "Food",
    gradient: "gradient-orange",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3a4.2 4.2 0 0 0 6 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>`,
  },
  {
    label: "Travel",
    gradient: "gradient-sky",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
  },
  {
    label: "Fun",
    gradient: "gradient-violet",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>`,
  },
  {
    label: "Learning",
    gradient: "gradient-emerald",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>`,
  },
  {
    label: "Music",
    gradient: "gradient-pink",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  },
  {
    label: "Memories",
    gradient: "gradient-cyan",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  },
  {
    label: "Passion",
    gradient: "gradient-red",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  },
  {
    label: "Goals",
    gradient: "gradient-yellow",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a.53.53 0 0 0 .4.29l5.16.756a.53.53 0 0 1 .294.904l-3.733 3.638a.53.53 0 0 0-.152.469l.882 5.14a.53.53 0 0 1-.77.56l-4.614-2.426a.53.53 0 0 0-.494 0L6.14 18.73a.53.53 0 0 1-.77-.56l.882-5.14a.53.53 0 0 0-.152-.469L2.366 8.924a.53.53 0 0 1 .294-.904l5.16-.756a.53.53 0 0 0 .4-.29z"/></svg>`,
  },
  {
    label: "Ideas",
    gradient: "gradient-indigo",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
  },
];

const usedQuestions = new Set();
const flippedCards = new Set();
const cardQuestions = new Map();

function getRandomQuestion() {
  const available = questions.filter((q) => !usedQuestions.has(q));
  const pool = available.length > 0 ? available : questions;
  return pool[Math.floor(Math.random() * pool.length)];
}

function flipCard(index) {
  if (flippedCards.has(index)) return;

  const question = getRandomQuestion();
  usedQuestions.add(question);
  flippedCards.add(index);
  cardQuestions.set(index, question);

  const cardEl = document.getElementById(`card-${index}`);
  cardEl.classList.add("flipped");
  cardEl.setAttribute("aria-label", `${cards[index].label}: ${question}`);
  cardEl.querySelector(".card-back p").textContent = question;

  document.getElementById("reset-btn").classList.remove("hidden");
}

function resetCards() {
  flippedCards.clear();
  usedQuestions.clear();
  cardQuestions.clear();

  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("flipped");
  });

  cards.forEach((config, i) => {
    const cardEl = document.getElementById(`card-${i}`);
    cardEl.setAttribute("aria-label", `Flip ${config.label} card`);
    cardEl.querySelector(".card-back p").textContent = "";
  });

  document.getElementById("reset-btn").classList.add("hidden");
}

function init() {
  const grid = document.getElementById("card-grid");

  cards.forEach((config, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `card-${index}`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Flip ${config.label} card`);

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front ${config.gradient}">
          ${config.icon}
          <span>${config.label}</span>
        </div>
        <div class="card-back">
          <p></p>
        </div>
      </div>
    `;

    card.addEventListener("click", () => flipCard(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        flipCard(index);
      }
    });

    grid.appendChild(card);
  });

  document.getElementById("reset-btn").addEventListener("click", resetCards);
}

init();
