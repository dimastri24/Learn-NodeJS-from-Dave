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

## 16TUT - Refresh Token Rotation and Reuse Detection

-   Now we want to take refresh token to the next level.
-   First off we will change the refresh token type to array string. So it can store multiple rt and the way handle the rt will be change.
-   We want to detected the use of refresh token from different user. If happened then we will delete the hacked rt from db, after that it will issue new rt. Also we clear the cookies first before all that happen. After saving the new token we will create and send new cookie.
-   At logout only need to change how to clear the rt from db.
-   While at authentication. We will get the cookie from previous request. If there is cookie we will keep the old rt. If there is cookie we also going to delete this old cookie and do rt detection. If token not found we going to throw away the old rt that we keep before. The rest are the same.
