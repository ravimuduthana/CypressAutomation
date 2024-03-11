describe('Login test scenario', () => {
    it('Launch Application', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('ravi')
        cy.get("input[name='password']").type('ravi')
        cy.get("input[type='submit']").click()
        cy.get("a[class='ng-binding']").click()
        cy.get("#month").select('March')
        cy.get("#month").select(1)
         
        
        
    })
  })