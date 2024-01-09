import Card from './Card';

class CardGame {
  constructor() {
    this.cardContainer = document.querySelector("#cards");
    this.resultContainer = document.querySelector("#result");
    this.cards = this.createCards();
    this.renderCards();
  }

  createCards() {
    const cards = [];
    const winnerLocation = Math.floor(Math.random() * 3);   

    for (let i = 0; i < 3; i++) {
      const isWinner = i === winnerLocation;
      const card = new Card(isWinner, this.resultContainer);
      cards.push(card);
    }
    return cards;
  }

  renderCards() {
    this.cards.forEach((card) => {
      this.cardContainer.appendChild(card.element);
    });
  }

  start() {
    this.cards.forEach((card) => {
        card.element.addEventListener('click', () => {
          card.handleCardClick(this.resultContainer);
        });
      });
  }
}

export default CardGame;
