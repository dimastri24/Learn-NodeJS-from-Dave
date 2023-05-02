# NodeJS Tutorials for Beginners

## How to run

-   Clone or unzip the repo.
-   Checkout to intended Branch and read the note / guide on each md branch.
-   run `npm install` to download the node_modules.
-   run `npm run dev` to run the server.

## Master / Main

-   Latest code.

## 10TUT - User Password Authentication

-   Now we have come to the register user and login.
-   Register user is just store data with extra step that is like check duplicate user and hash the password with the help of bcrypt.
-   Next is the login in the authController.js, well first we find the user if it exist then we compare the password.
-   To this point just like that export and import to the router and call it in the server.js
-   It works like as we expected. Furthermore we will implement JWT for login session and router access in the next tutorial.
