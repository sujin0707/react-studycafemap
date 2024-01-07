import '../index.css';
import Card from './Card';

// 실제 실행 코드 작성
// ex)cardGame.start()

class CardGame {
  constructor() {
    this.cardContainer = document.querySelector("#cards");
    this.cards = this.createCards();
    this.renderCards();
  }

  createCards() {
    const cards = [];
    const winnerLocation = Math.floor(Math.random() * 3);   

    for (let i = 0; i < 3; i++) {
      const isWinner = i === winnerLocation;
      const card = new Card(isWinner);
      cards.push(card);
    }
    return cards;
  }

  renderCards() {
    this.cards.forEach((card) => {
      this.cardContainer.appendChild(card.element);
    });
  }
}

const cardGame = new CardGame();
cardGame.start();