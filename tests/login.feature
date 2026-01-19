
Feature: Login page validation

Scenario: Login page validation
Given User should be on login page
When User should Enter the username "admin@email.com" and password "admin@123"
When User should click on the submit button
Then user should successfully logged in