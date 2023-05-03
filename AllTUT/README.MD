# NodeJS Tutorials for Beginners

## How to run

-   Clone or unzip the repo.
-   Checkout to intended Branch and read the note / guide on each md branch.
-   run `npm install` to download the node_modules.
-   run `npm run dev` to run the server.

## Master / Main

-   Latest code.

## 12TUT - Authorization Roles and Permission

-   Now we applied Authorization to our API based on their roles.
-   Since we will have roles in the user data we gonna need all our controller that related to it. In registerController we add role when creating new user. In authController and refreshTokenController we add roles inside the token lastly we need to decode the role in verifyJWT.
-   Next up we create the verifyRoles middleware that will be use in the controller to check if the role from token are one of the roles that got permission.
