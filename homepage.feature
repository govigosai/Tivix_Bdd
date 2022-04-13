Feature: First page testing

    Scenario: First page testing

        Given User visit the url
        When User select country
        And User select city
        And User select model
        And User select pick-up date
        And User select drop-off date
        And User click on submit button
        Then User navigate to car rental page

       