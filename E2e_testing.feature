Feature: End to End

    Scenario: End to End Testing

        Given User visit to url
        When User select country
        And User select city
        And User select model
        And User select pick-up date
        And User select drop-off date
        And User click on submit button
        Then User navigate to car rental page
        Then User click on car rent button
        Then User click on Rent button
        Then User navigate to car specification page