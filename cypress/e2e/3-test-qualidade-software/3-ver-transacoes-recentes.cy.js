describe('Navegação e ver transacoes recentes', () => {
    it('Realiza login e navegação no site Testfire', () => {
      cy.visit('https://demo.testfire.net/login.jsp');
      cy.get('#uid').type('admin');
      cy.get('#passw').click().type('admin');
      cy.get('tr:nth-child(3) input').click();
      cy.url().should('contain', 'https://demo.testfire.net/bank/main.jsp');
      
      // Clica no elemento contendo o texto "View Recent Transactions"
      cy.contains('View Recent Transactions').click();
  
      cy.get('#startDate').click().type('2024-04-12');
      cy.get('#endDate').click().type('2024-04-12');
      cy.get('td:nth-child(5) > input').click();
      cy.get('#Form1').submit();
      cy.url().should('contain', 'https://demo.testfire.net/bank/showTransactions');
    });
  });
  