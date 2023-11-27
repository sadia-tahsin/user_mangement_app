# user_management

# How to run the application locally
- Initial setup:
    - Clone the repository.
    - Install Dependencies using 'npm install'.
      
After completing the project setup, run two commands in the terminal to build and run the app: 'npm run build' and 'npm start'.

Now, the application should be running on http://localhost:5000/


- Create a new user: To test the post route for creating a new user locally, Postman or a similar application can be used to send a POST request.
  The API endpoint URL is: http://localhost:5000/api/users/
  
  ## Sample data for the POST request body

   ```
    {
        "userId": 3,
        "username": "alice_davis",
        "password": "$2b$12$3fJyHTgM8QgU.q.tlpNVyOf.hJYfhVe7XPGCHm9Wq1RmexUZbUEeu",
        "fullName": {
            "firstName": "Alice",
            "lastName": "Davis"
        },
        "age": 28,
        "email": "alice.davis@example.com",
        "isActive": true,
        "hobbies": [
            "painting",
            "swimming"
        ],
        "address": {
            "street": "789 Pine St",
            "city": "Largetown",
            "country": "USA"
        }
   }
   ```


- Retrieve a list of all users: This API can be checked using the Postman or similar application or directly from the browser.
 The API endpoint URL is: http://localhost:5000/api/users/
-  Retrieve a specific user by ID: This API can be checked using the Postman or similar application or directly from the browser.
 The API endpoint URL is: http://localhost:5000/api/users/:userId 
- Update user information: To examine this API for updating a user, need to make a PUT request using the Postman or similar application.
   The API endpoint URL is: http://localhost:5000/api/users/:userId
- Delete a user: To check this API for deleting a user from DB, Postman or a similar application can be used to send a DELETE request.
  The API endpoint URL is: http://localhost:5000/api/users/:userId
- Add New Product in Order:  To examine this API for adding a new product to a user, need to make a PUT request using the Postman or similar application. The data format is similar to the sample data for the POST route.
   The API endpoint URL is: http://localhost:5000/api/users/:userId/orders
- Retrieve all orders for a specific user: To explore this API for retrieving orders of a user, need to make a GET request using the Postman or similar application.
   The API endpoint URL is: http://localhost:5000/api/users/:userId/orders
- Calculate the Total Price of Orders for a Specific User: Finally, To explore this API for retrieving the total price of orders of a user, need to make a GET request using the Postman or a similar application or directly from the browser. The API endpoint URL is http://localhost:5000/api/users/:userId/orders/total-price.
