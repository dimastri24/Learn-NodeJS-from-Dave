# NodeJS Tutorials for Beginners

## How to run

-   Clone or unzip the repo.
-   Checkout to intended Branch and read the note / guide on each md branch.
-   run `npm install` to download the node_modules.
-   run `npm run dev` to run the server.

## Master / Main

-   Latest code.

## 11TUT - JWT Authentication

-   This tutorial quite long since we play around jwt means we need to create, store, verify, auth, refresh, delete the token.
-   Here we add 3 new packages, dotenv for the use of .env, jsonwebtoken or the jwt, cookie-parser to create and delete cookie.
-   Starting from creating jwt in authController.js and send the token in the response body also create the cookie for the refresh token.
-   Second we apply the authentication middleware to the employees router with verifyJWT.js
-   Next we need to create refreshTokenController.js to refresh the access token.
-   Lastly logoutController.js to delete the refresh token that being store in the db so the access token cann't be refresh.
-   Refresh token are the one being store in db and send to the client through cookie httpOnly. While the access token send to client normally in response body, this access token should be save in the memmory not cookie or any browser storage.
-   That's why the duration of access token not very long but the refresh token quite long. Make sure to change the expiration when production.
