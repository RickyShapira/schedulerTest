Cypress.Commands.add('postPetSmokeTest', (myPet) => {
	cy.request({
		method: 'POST',
		url: 'https://petstore.swagger.io/v2/pet',
		body: myPet
	}).then(r => {
		return r
	})
})

Cypress.Commands.add('getPetSmokeTest', (myPet) => {
	cy.request({
		method: 'GET',
		url:  'https://petstore.swagger.io/v2/pet/' + myPet.id,
	}).then(r => {
		return r
	})
})
