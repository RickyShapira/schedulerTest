context('smoke tests', () => {
	describe('smoke tests', function () {

		const myPet  = {
			"id": 4,
			"category": {
				"id": 0,
				"name": "smoke"
			},
			"name": "test",
			"photoUrls": [
				"string"
			],
			"tags": [
				{
					"id": 0,
					"name": "string"
				}
			],
			"status": "available"
		}



	it('SmokeTest', () => {
					cy.postPetSmokeTest(myPet).then(()=>{
					}).then(r => {
						expect(r.status).to.eq(200);
						expect(r.body.id).to.eq(myPet.id);
					})
					cy.getPetSmokeTest(myPet).then(r => {
						expect(r.status).to.eq(200);
						expect(r.body.id).to.eq(myPet.id);
})
				})
	})
})