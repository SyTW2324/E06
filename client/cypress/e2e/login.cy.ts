//import { Login } from '../src/pages/Login.vue'

describe('login', () => {
  beforeEach(() => {
    // Visit your Vue app or the login page directly
    cy.visit('http://172.16.30.2:3000/login') // Update with your actual route
  })

  it('passes', () => {
    //cy.visit('http://172.16.30.2:3000/')
    //cy.mount(Login)
    //cy.get("a[href='https://vitejs.dev/']").invoke('text').should('eq', 'Vite')
  })
})
