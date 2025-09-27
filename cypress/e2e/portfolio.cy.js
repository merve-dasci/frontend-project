describe('Portfolio Testleri', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.wait(3000) 
  })

  it('Sayfa açılıyor', () => {
    
    cy.get('body').should('be.visible')
    cy.url().should('include', '/')
  })

  it('Başlık var', () => {
    
    cy.get('h1, h2, h3').should('exist')
  })

  it('Linkler çalışıyor', () => {
    cy.get('a').should('exist')
  })

  it('Buton var', () => {
    cy.get('button').should('exist')
  })

  it('Mobil görünüm', () => {
    cy.viewport(375, 667)
    cy.get('body').should('be.visible')
  })

})