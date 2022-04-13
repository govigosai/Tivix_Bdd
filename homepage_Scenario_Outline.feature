Feature: First page testing

    Scenario Outline: First page testing

        Given User visit the url
        When User select country as '<country>' and User select city as '<city>'
        And User select model as '<model>'
        And User select pick-up date
        And User select drop-of date
        And User click on submit button
        Then User navigate to car rental page

        Examples:
            | country  | city   | model  |
            | France   | Berlin | Toyota |
            | Germainy | Cracow | Toyota |
            | Poland   | Paris  | Toyota  |