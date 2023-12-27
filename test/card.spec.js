describe('카드 컴포넌트 테스트', () => {
  it('카드 컴포넌트가 렌더링된다.', () => {
    cy.visit('http://localhost:3000');

    cy.get('.card').should('be.visible');
  });
});
