
Cypress.Commands.add('verifyExistText', (element,text,base = '',index = 0) => {
    cy.get(`${base} ${element}`).eq(index).should('have.text',text);
});

Cypress.Commands.add('verifyNotExistText', (element,text,base = '') => {
    cy.get(`${base} ${element}`).should('not.have.text',text);
});

Cypress.Commands.add('verifyContainText', (element,text,base = '',index = 0) => {
    cy.get(`${base} ${element}`).eq(index).should('contain.text',text);
});

Cypress.Commands.add('verifyExist', (element,text,base = '',index = 0) => {
    cy.get(`${base} ${element}`).eq(index).should('exist');
});

Cypress.Commands.add('verifyAttributeExist', (element,attribute) => {
    cy.get(element).should('have.attr',attribute)
});

Cypress.Commands.add('verifyAttributeExist', (element,attribute) => {
    cy.get(element).should('have.attr',attribute)
});

Cypress.Commands.add('verifyElementLength', (element,length) => {
    cy.get(element).should('have.length',length)
});

Cypress.Commands.add('verifyElementLengthGreaterThanEqualTo', (element,length) => {
    cy.get(element).should('have.length.greaterThan',length)
});

Cypress.Commands.add('verifyElementLengthLessThanEqualTo', (element,length) => {
    cy.get(element).should('have.length.least',length)
});

Cypress.Commands.add('verifyRadioButtonChecked', (radio_button_value,attribute = 'value') => {
    cy.get('['+ attribute + '=' + radio_button_value + ']').eq(0)
        .parent()
        .should('have.attr', 'class')
        .and('contain', 'checked');
})

Cypress.Commands.add('clickElementByText', (element, text,index= 0) => {
    cy.get(element).eq(index).should('be.visible').and('have.text', text).click()
})

Cypress.Commands.add('clickElement', (element,index=0) => {
    cy.get(element).eq(index).should('be.visible').click()
})

Cypress.Commands.add('clickInTable', (table,row = 0,col = 0) => {
    cy.get(table).eq(row).find('td').eq(col).click()
});

Cypress.Commands.add('getNumberElement',(element)=>{
    cy.get(element).then($elements => {
        return $elements.length;
    })
})

Cypress.Commands.add('clickIconByContent', (iconName, base = '', index = 0) => {
    cy.get(`${base} [data-icon=${iconName}]`).eq(index).should('be.visible').click()
})

