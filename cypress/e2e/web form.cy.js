/// <reference types="cypress" />

describe('1st Page Form', () => {
    beforeEach(() => {
      cy.visit('/') //baseUrl is placed in cypress.config.js file
      cy.wait(3000)
      // Would probably add in assertion here to ensure User is on the first page of the form
    })
  })
  
    it('Fills in the details on the form on 1st page', () => {
      cy.fixture('fixture-data.json').as('fixtureData');

      cy.get('@fixtureData').then((fixtureData) => {

        // Access values from the loaded fixture data
        const vehicleRegPlate = fixtureData.vehicle.regplate;
        const vehicleTradeValue = fixtureData.vehicle.tradeValue.value;
        const vehicleCurrency = fixtureData.vehicle.tradeValue.currency;

        const vehicleType = fixtureData.vehicle.type;

        const driverName = fixtureData.driver.name;
        const driverAge = fixtureData.driver.age;
        const driverFieldB = fixtureData.driver.fieldB;

        // Use loaded data in my test commands

        cy.visit('/');
        
        cy.get('driver.name').type(driverName);
        cy.get('vehicle.regplate').type(vehicleRegPlate);

        cy.get('vehicle.type').select(vehicleType);

        cy.get('driver.age').type(driverAge);
        cy.get('vehicle.tradeValue').type(vehicleTradeValue);

        // Not too sure how to change this using the test values hwoever I do have a classic way of changing it
        //cy.get('').select(vehicleCurrency);

        // There are a few ways I could go about testing that this button works 
        cy.contains('NEXT').click();

        // Would add another assertion to ensure User is on the 2nd page of the form

      })
    })
    
      it('Fills in the details on the form on 2nd page', () => {
        cy.fixture('fixture-data.json').as('fixtureData');
        cy.get('@fixtureData').then((fixtureData) => {
  
          const tpName1 = fixtureData.thirdParties[1].name; 
          const tpRegPlate1 = fixtureData.thirdParties[1].regplate; 
          const tpType1 = fixtureData.thirdParties[1].type;
  
          const tpName2 = fixtureData.thirdParties[2].name;
          const tpRegPlate2 = fixtureData.thirdParties[2].regplate;
  
          const tpCount = fixtureData.thirdParties.count;
  
          // Use loaded data in my test commands
          
          cy.get('thirdParties.count').select(tpCount[0]);
          cy.get('thirdParties.1.name').type(tpName1);
          cy.get('thirdParties.1.regplate').type(tpRegPlate1);
  
          cy.get('thirdParties.1.type').select(tpType1);
  
          // There are a few ways I could go about testing that this button works 
          cy.contains('DONE').click();
  
          // Would add another assertion to ensure User can see the confirmation page

          // Would add some assertions to ensure User can see correct details on the screen 
  
        })
      })