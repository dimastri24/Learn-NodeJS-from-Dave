# NodeJS Tutorials for Beginners

## How to run

-   Clone or unzip the repo.
-   Checkout to intended Branch and read the note / guide on each md branch.
-   run `npm install` to download the node_modules.
-   run `npm run dev` to run the server.

## Master / Main

-   Latest code.

## 07TUT - Middleware in Express

-   There are three type middleware: built-in, custom and 3rd party.
-   built-in are urlendcoded, json and static. CORS are the example for the 3rd party. Here we also try to make a whitelisting of the cors.
-   This tutorial we create custom middleware of logging event.
-   use() is the way to define the middleware and this will apply to all the route.
-   Don't forget to delete the domain and !origin for development when staging to production.
