# NodeJS Tutorials for Beginners

## Version

-   NodeJS >= ^16
-   MongoDB >= ^6
-   Other Package version check on the package.json

## How to Run

-   Clone or unzip the repo.
-   Checkout to intended Branch and read the note / guide on each md branch.
-   run `npm install` to download the node_modules.
-   run `npm run dev` to run the server.

## How to Test

-   Add Thunder Client extension into your vscode.
-   Open the setting of Thunder Client then enable `Save to Workspace`.
-   Go to collection and select the test you want to run.

## Master / Main

-   Latest code.

## 13TUT - Install and Connect to MongoDB

-   In the tutorial Dave teach us to use the cloud MongoDB but here I'm just going to use the local MongoDB by installing the service in my PC.
-   Create Database `CompanyDB` and collection `employee`.
-   Add `DATABASE_URI=<uri>` into the .env file.
-   Install mongoose to connect and modeling the MongoDB. The lastest version is ^7 but I'll just going to use the ^6.
-   Remove require('dotenv').config from, other files and let just the server.js call it.
-   Make a dbConn config for the connection.
