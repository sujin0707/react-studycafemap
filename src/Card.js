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
    const resultMessage = document.createElement('p');
    resultMessage.textContent = this.isWinner ? '당첨입니다' : '꽝입니다';
    const resultContainer = document.querySelector('#result');
    if (!resultContainer.hasChildNodes()) {
      resultContainer.appendChild(resultMessage);
    }
  }
}

export default Card;
