describe('My First Test', () =>
{
	let URL = `http://${Cypress.env('DUC_URL') || 'localhost'}:${Cypress.env('DUC_PORT') || '8080'}`
	it('visit main page', () =>
	{
		cy.visit(URL)
	})
	it('should work with deep links', () =>
	{
		cy.visit(`${URL}/construct`)

		cy.contains('ETH/BTC')
		cy.contains('Generate')
	})
	it('generate contract', () =>
	{
		cy.visit(URL)

		cy.contains('Cryptocurrency').click()
		cy.url().should('include', '/construct')
		cy.contains('ETH/BTC').click()
		cy.contains('Binance').click()
		cy.contains('Generate').click()

		cy.url().should('include', "/contract/eos/crypto/binance/ETH%2FBTC")
		cy.contains("eosiolib/eosio.hpp").contains("EOSLIB_SERIALIZE").contains("YOUR_CONTRACT_NAME")
		cy.contains("eos_contract_instructions")
	})
})