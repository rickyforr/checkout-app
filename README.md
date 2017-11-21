# FoodsJS

## Synopsis
FoodsJS is a simple but elegant automated checkout system built using ReactJS.
The app was built using create-react-app. Find more information on create-react-app [here](https://github.com/facebookincubator/create-react-app)

## Architecture
Most of the state of the application is managed in the App container. I set up an array of objects representing items in a cart at checkout. Each object contains all properties relavent to the product (price, quanitiy in cart, quantity in inventory, sale info...etc). Also created state properties for the subtotal and total discount. 

![App Diagram](http://res.cloudinary.com/lyvtg7cjl/image/upload/v1511292549/FoodsJS_yo4cmq.png)

The Cart component displays the products and the cart control. It manages all the addition or removal of items from the cart. When a button is clicked with the an appropriate quantity (doesn't exceed inventory and not less than 0) it passes the product id and quantity entered in the input field to the App container. The App container then calls the state-functions to adjust the state accordingly
![Cart Cmpnt Pic](http://res.cloudinary.com/lyvtg7cjl/image/upload/v1511240962/Screen_Shot_2017-11-20_at_10.08.55_PM_mrtszn.png)
(Cart component)

The Receipt component manages the calculation of the total and discount for the individual products. It displays the price quantity, any sale information and total for individual products.
![Receipt Cmpnt Pic](http://res.cloudinary.com/lyvtg7cjl/image/upload/v1511241093/Screen_Shot_2017-11-20_at_10.11.06_PM_wgvdfc.png)
(Receipt component)

The Total component displays the total discount, subtotal and total. The Header component displays a header with the foodjs logo.  

## Dependancies
react-alerts was used to display messages that enhance the UX. A user will be prompted on success of adding and removing from the cart as well as displayed warnings when the quantity entered exceeds the inventory for that product.
Most of the styling was done using Bootstrap 4 as well as some costume CSS contained in the App.css file.

## Getting Started
clone repository and run `npm start` from the command line 
app will run on local port 3000. Go to http://localhost:3000/ in your browser to see the app.

## Tests
`npm test` will run jest tests.
state function logic is covered in state-function.test.js
component rendering tests are in App.test.js
