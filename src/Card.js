class Card {
  // 필드 값은
  constructor(isWinner) {
    this.isWinner = isWinner;
    this.element = this.createCardElement();
    this.element.addEventListener('click', this.handleCardClick.bind(this));
  }

  createCardElement() {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.textContent = '카드입니다';
    return cardElement;
  }

  handleCardClick() {
    alert(this.isWinner ? '당첨입니다' : '꽝입니다');
  }
}

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

export default Card;
