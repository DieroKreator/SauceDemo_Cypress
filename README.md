Introduction:

  Front-end automation on SauceDemo website. Features such as Authentication, Navigation and Checkout will be within the scope of testing.


Test Strategy:

  Automation will be done through scripting, using Cypress as a tool and Chrome as a test environment.


Test Case Design:

  Preconditions and prerequisites.
  - Website url loads successfully

    TC001: Verify that users can successfully login to the website.
      - Enter valid username and password
      - Click on the login button
      Expected results.
      - User should be logged in and redirected to the products page
    
    TC002: Verify that users cannot login with invalid credentials
      - Enter an invalid username and password.
      - Click on the login button.
      Expected results.
      - System displays "Epic sadface: Username and password do not match any user in this service" error message
    
    TC003: Validate the ability to add products to the shopping cart
      - Enter valid username and password
      - Click on the login button
      - Select a product from the catalog
      - Click on the "Add to Cart" button
      - Verify the product is added to the shopping cart
      Expected results.
      - Product should be successfully added to the cart, and the cart count should be updated
    
    TC004: Ensure users can manage items in the shopping cart
      - Enter valid username and password
      - Click on the login button
      - Select a product from the catalog
      - Click on the "Add to Cart" button
      - Navigate to the shopping cart page
      - Verify the list of products in the cart
      - Remove items from the cart
      Expected results.
      - User should be able to remove items from the cart and the cart total should reflect the changes accurately
    
    TC005: Validate the checkout process from adding items to completing the purchase
      - Enter valid username and password
      - Click on the login button
      - Select a product from the catalog
      - Click on the "Add to Cart" button
      - Proceed to checkout from the shopping cart.
      - Enter shipping and billing information.
      - Confirm the order.
      Expected results.
      - User should be able to complete the checkout process without errors, and a confirmation page should be displayed

    
Test Reporting:

  Report includes test coverage and pass/fail rates). Distributed directly to the project team.


Risk Management:

  - Website Changes: I will make sure my test could fail
  - Authentication Mechanism: I will make sure my test could fail
  - Performance Issues
