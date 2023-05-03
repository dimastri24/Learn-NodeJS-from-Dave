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

## 14TUT - MongoDB Schema and Modeling

-   Now we are no longer using manualy store in json but store it in our MongoDB. So we may get rid the use of it in our controller.
-   Let's go to our model folder and create Employee and User Schema. For more about the schema and it's option go the mongoose documentation.
-   What we export will be the mongoose.model(), first arg is the model name it will automatically convert plural lowercase for the colletion, second arg is the schema, third arg is the collection name and its optional if the model and collection has different name.
-   Next we try to insert a document or what we used to know as record in other sql db. Go to the registerController for the example.
