# Sprint 7 Project: QA Automation (API Testing using Git and GitHub)

    Testing API endpoints using the GET, POST, PUT, DELETE methods for the Urban Grocers server utilizing local and remote repositories with QA automation.

    The purpose is to improve testing efficiency, accuracy, and speed by automating repetetive and time-consuming manual testing tasks.


SETUP

    1. Connect your GitHub account to TripleTen
        - Click the "Link GitHub account" button in the widget at the top of the Project description page on the TripleTen platform
        - Confirm that you want to link your GitHub account once a new browser tab opens

    2. Clone the new repository to local computer
        - Open preferred terminal emulator (e.g. Git Bash)
        - Create a directory to store all projects:
            cd ~               # make sure you're in your home directory
            mkdir projects     # create a folder called projects
            cd projects        # change directory into the new projects folder
        - Clone the repo 
            # if you are using HTTPS
            git clone https://github.com/username/reponame.git
            # if you are using SSH
            git clone git@github.com:username/reponame.git
 
    3. To install dependencies, run the command npm install from the console in the projects folder . 


CONFIGURATION

    1. To set the test URL, launch the Urban Grocers server to generate a new URL link. 
    2. Replace the API URL with this link in the config.js file. This helps declare the URL in one place and then use it throughout the whole project.     


TEST EXECUTION

    1. Open preferred terminal emulator (e.g. Git Bash)

    2. To run the test suites, run the command npx jest + the test file name.
        # make sure you are in the projects folder
        # run test in the following order
        npx jest tests/postHandlers.test.js
        npx jest tests/putHandlers.test.js
        npx jest tests/getHandlers.test.js
        npx jest tests/deleteHandlers.test.js

    3. If the tests ran smoothly, results will return as PASS. Otherwise, check the code and update as necessary.
    

TEST CASES

1. Check the response status code for POST requests and ensure it matches the expected value in the documents.
2. Parse the response and check that the response body contains the expected data for POST requests.
3. Check the response status code for PUT requests and ensure it matches the expected value in the documents.
4. Parse the response and check that the response body contains the expected data for PUT requests.
5. Check the response status code for GET requests and ensure it matches the expected value in the documents.
6. Parse the response and check that the response body contains the expected data for GET requests.
7. Check the response status code for DELETE requests and ensure it matches the expected value in the documents.
8. Parse the response and check that the response body contains the expected data for DELETE requests.


TEST REPORT

Number of tests: 8
Number of PASSES: 8 
Number of FAILS: 0 
Success rate: 100%


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


CODING STYLE

Below are the style conventions followed in the code: 

    - Used camelCase format for naming variables and functions
    - Named variables, methods, and classes to reveal intent
    - Used arrow functions "=>" when defining classes or methods
    - Used semicolons at the end of each statement
    - Used const keyword for declaring variables that will never be re-assigned, and let keyword otherwise
    - Used try..catch statements to test codes for errors
    - Used expect function with to.Be matcher to compare expected values with actual values received











