# Expeditors Angular Capstone

You will build a front-end enabling CRUD operations against a REST-based back-end.

The Expeditors Coffee Roasters company is developing an on-line inventory and order tracking application. A RESTful back-end exists for the application, but there is no UI. This is where your team comes in. You will build an application with the following views:

- Search for a coffee
- List coffees
- Details for a specific coffee
- Add a coffee
- Edit a coffee
- Delete a coffee

As you have probably noticed, these are the typical views for a CRUD app: Search, List, Detail, Add/Edit/Delete.

## Libraries
Base repository: The base repository can be found at (URL TK). We are using Angular 17 for compatibility with UI Router
Routing: UI Router is installed, but there is currently no routing configuration added. You will need to set up UI router to work with your application.
Testing: The repository has been configured with Jasmine and Karma. Use Jasmine for unit testing. Consider, but you are not required to use, Testing Library for more user-level testing.
CSS: Bootstrap is available and configured for the application
Other JavaScript libraries: Helper libraries (e.g. lodash, date-fns, etc.) are allowed. Other UI libraries (e.g. Angular Material) are NOT permitted. In the real world, you will use these libraries, but one of the goals of the capstone is for you to develop your own components.

## Expectations
You are expected to complete screens for the following, with the following considerations:


- Search for a coffee
  - What happens if there are no results?
  - What constitutes bad data?
  - What are the search terms?
- List coffees
  - There should be sort functionality
  - Bonus: Filtering
  - Do we need to worry about pagination?
- Details for a specific coffee
- Add a coffee
  - Validations?
  - What would be "enough" to add a coffee?
- Edit a coffee
  - Validations as above
- Delete a coffee
  - Actually marked as “inactive”
  - Make sure this doesn’t show up in searches or details
- Navigation between these views should be intuitive

You are also expected to implement the following test cases:
1. Search produces results
1. Search produces no results
1. Invalid terms for search
1. Sorting coffees works
1. Details page shows up
1. Any validations should be tested
1. Add a coffee: What happens with success?
1. Add a coffee: What happens with insufficient data?
1. Delete a coffee: Validate that it’s marked as inactive
1. Delete a coffee: Make sure it does not show up in search results and cannot be reached with details

We may add more test cases as we go along, but these ten are the minimum.

You are strongly encouraged to check in with your instructor regularly for feedback.

## Stretch goals
These are goals to be attempted after completing the primary portion of the capstone. If you do not complete any of these goals, it’s fine. The Expectations section is most important. But if you get done and have some time to spare, here are a few things you could implement:

- List screen filtering
- Code coverage reports for your testing
- Use Testing Library over Jasmine for some situations
- User logins?
- More complex inventory and pricing management?
- Ordering system?
