# Redux Asynchronous Actions - Lab 32

Virtual Store Phase 3: Connect the Virtual Store to an API to retrieve live data from your data source, using thunk to enable asynchronous actions
    
## Links
    
- [CodeSandbox]()
- [Netlify]()
    
## Phase 3 Requirements

In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

The user stories from Phases 1 and 2 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

* As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock
* As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it

## Technical Requirements / Notes

And as developers, here are the high level development tasks that address the above end user requirements and workflow

* Continue to use Material UI Components for layout and styling
* Load the category and product list from a remote API on page load.
* Update the product quantity in stock when adding items to (or removing from) the cart
* Continue to use multiple reducers
    
## Testing Instructions   

## UML
![lab-29-uml](https://github.com/daniel-nguyen-401-advanced-javascript/storefront/blob/redux/storefront/assets/lab-29-uml.png)
