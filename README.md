# Sprint 7 Project: API Testing using Git and GitHub

    Testing API endpoints using the GET, POST, PUT, DELETE methods for the Urban Grocers server using local and remote repositories. 


TECHNOLOGIES AND DOCUMENTS USED:

Git
    - used to track changes throughout the history of a project and saves the state of a repository at different points in time. 

Git Bash
    - let's you communicate with Git, the version control system.

GitHub
    - a platform used for collaborative software engineering, built on top of the Git version control system.

Visual Studio Code
    - a coding editor used to work on test scripts that can also connect to GitHub

Node.js
    - used to run Javascript code outside the browser

NPM
    - used to manage packages or ready-to-use codes

Jest
    - a Javascript testing framework designed to ensure correctness of any Javascript codebase.

Google Chrome
    - web browser of choice

apiDOC & SWAGGER
    - primary resource containing instructions and technical content on how to use the API and its services.


SETUP

    1. Connect GitHub account to TripleTen
    2. Clone the new repository to local computer
    3. Run npm install from the console in the project folder.


CONFIGURATION

Launch the Urban Grocers server to generate a new URL link. Replace the API URL with this link in the config.js file. This helps declare the URL in one place and then use it throughout the whole project. 


TEST EXECUTION

    - Codes stored in VS Code 
    - Tests ran in Windows Terminal using the npx jest command + the test file name

       * getHandlers.test.js
       * postHandlers.test.js
       * putHandlers.test.js
       * deleteHandlers.test.js

TEST CASES

GET requests
    - status code should be 200
    - response body should contain a kit by the name of "For movies and series"

POST requests
    - status code should be 201
    - response body should contain the warehouse "Fresh Food"

PUT requests
    - status code should be 200
    - response body should contain the final cost of 20

DELETE requests
    - status code should be 200
    - response body should contain "ok": true

TEST REPORT

Number of tests: 8
Number of PASSES: 8 
Number of FAILS: 0 
Success rate: 100%


CODING STYLE

Below are the style conventions followed in the code: 

    - Used camelCase format for naming variables and functions
    - Named variables, methods, and classes to reveal intent
    - Used arrow functions "=>" when defining classes or methods
    - Used semicolons at the end of each statement
    - Used const keyword for declaring variables that will never be re-assigned, and let keyword otherwise
    - Used try..catch statements to test codes for errors
    - Used expect function with to.Be matcher to compare expected values with actual values received











