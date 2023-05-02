## Install
- git clone https://github.com/RickyShapira/schedulerTest/tree/schudeletTest
- yarn
- yarn install
- checkout to schudeletTest brunch
## Run Cypress:
- Open terminal
- Navigate to ```tests``` folder (`cd /Test/tests`)
- Run: ```npx cypress run```
- All the tests will run one by one

The tests are checked :
1. GET /pet/{petId}
2. POST /pet

https://petstore.swagger.io/#/


following tasks for scheduler -  https://stephenchou1017.github.io/scheduler:
1. Switch to infinite scroll and to month view.
2. Create several new events and check that the DOM elements count increased.
3. Go ahead one month and check that the DOM elements count decreased.
4. Go back to the original date and check if the events that you have created still exist.