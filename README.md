# Saucy Tango Food Order Form
## This is a practice project from the codecademy front end platform. Much of this code was already set up for me.
>In this practice project, you will create a food order form for a restaurant.

>The local mom-and-pop shop, Saucy Tango, has received a lot of love from the community recently. To keep up with demand, they’ve decided to open their restaurant for online orders. They’ve entrusted this task to you, a budding React developer.

>Your goal is to create a functional form that allows customers to place their orders easily. Once the customer submits the form, the form will alert them about their order details. You will be provided with a menu and your task is to create a form that can take in customer details such as name, phone number, address, and order.

>To complete this project, you will use your understanding of controlled React forms. You’ll be using the State Hook to manage the state of the form, and employ event handlers to update the state of the form as the customer fills in their details.

## I took the following steps to practice controlled forms using state hooks in React:
### Setting Up the Form
1.  Open up FoodOrderForm.js. We’ll start laying down the foundation of our form.
    Inside the FoodOrderForm component’s return statement, add a form element
2.  Inside the form tags, create an input field each for name, phone, address, and order.
    For each input, add an id attribute set to the information it is responsible for, such as "name", "phone", "address", and "order".
3.  Attach a label element to each input element.
4.  Great, the foundation is taking shape!
    Let’s now add a button at the bottom of our form. You can set the text of the button to "Submit Order" and include a type attribute with a value of "submit". This will let the browser know that this button is intended to submit the form.
### Controlling the Form
5.  Inside the FoodOrderForm component and above the return statement, use the State Hook to define a state variable for each piece of information, 
    along with their state setters.
    Initialize all state variables to an empty string.
6.  For each input element, add a value attribute and set the value to the corresponding state variable.
7.  Update each input element by giving it an onChange event handler.
8.  Give each input element an onChange event handler and pass in a callback function that updates the corresponding state variable of each input
    based on the values of e.target.value
### Form Submission
9.  Inside the FoodOrderForm component, define a handleSubmit() function to manage the submitted form data. 
    The function should receive an event object, e, in its parameter.
    In the function body, prevent the form from taking its default action with e.preventDefault(). Rather than using the default action, we want to have it alert the user instead.
10. While still in the function body of handleSubmit(), alert the user using the JavaScript function alert().
    The alert should output the user’s order data in this format.
    Order Successful!
    Your order was user's orders.
    Please show your confirmation number for pickup.
11. Pass the handleSubmit() function to the form by giving the form tag an onSubmit event listener with the value handleSubmit.
