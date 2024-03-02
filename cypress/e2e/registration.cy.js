describe('Registration', () => {
    it('Register new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('ravi')
        cy.get("input[id='customer.lastName']").type("m")
        cy.get("input[id='customer.address.street']").type("alkapur")
        cy.get("input[id='customer.address.city']").type("hyderabad")
        cy.get("input[id='customer.address.state']").type("telangana")
        cy.get("input[id='customer.address.zipCode']").type("500089")
        cy.get("input[id='customer.phoneNumber']").type("970353")
        cy.get("input[id='customer.ssn']").type("098")
        cy.get("input[id='customer.username']").type("ravi")
        cy.get("input[id='customer.password']").type("ravi")
        cy.get("input[id='repeatedPassword']").type("ravi")
        cy.get("input[value='Register']").click()
       
    })
  })