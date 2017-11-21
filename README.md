# FoodJS

## Synopsis
FoodJS is a simple but elegant automated checkout system built using ReactJS.

## Architecture
Most of the state of the application is managed in the App container. I set up an array of objects representing items in a cart at checkout. Each object contains all properties relavent to the product (price, quanitiy in cart, quantity in inventory...etc). 

![alt text](http://res.cloudinary.com/lyvtg7cjl/image/upload/v1511240962/Screen_Shot_2017-11-20_at_10.08.55_PM_mrtszn.png)

The Cart component displays the products and the cart control. It manages all the addition or removal of items from the cart and calls the state-functions to adjust the state accordingly

The Receipt component manages the calculation of the total and discount for the individual products. It displays the price quantity, any sale information and total for individual products.

The Total component displays the total discount, subtotal and total. The Header component displays a header with the foodjs logo.  

## Dependancies
react-alerts was used to display messages that enhance the UX. A user will be prompted on success of adding and removing from the cart as well as displayed warnings when the quantity entered exceeds the inventory for that product.

## Getting Started
clone repository and run `npm start` from the command line 
app will run on local port 3000

## Tests
`npm test` will run jest tests.
state function logic is covered in state-function.test.js
