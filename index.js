// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require("./utils/generateMarkdown.js");
const generateMarkdown = require('./utils/generateMarkdown.js');

const fileName = "README.md";
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description for your project? (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Is there an installation process?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions for this project?",
        when: ({confirmInstallation}) => {
            if (confirmInstallation) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to give usage information?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: "What are the usage information for this project? (Required)",
        when: ({confirmUsage}) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to include contribution guidelines?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What are the contribution guidelines for this project? (Required)",
        when: ({confirmContribution}) => {
            if (confirmContribution) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to include test instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'test',
        message: "What are the test instructions for this project? (Required)",
        when: ({confirmTest}) => {
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "What license best fits your project from below? (Required)",
        choices: ['MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC License'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a license for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your github username? (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github username for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "what is your email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email for your project!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data.toString(), function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("Your professionally created README.md has been generated!");

    });
}

// TODO: Create a function to initialize app
const init = () => {
    console.log("Welcome to a professional README.md generator! Begin by answering the following prompts.");
    console.log("=======================");
    inquirer.prompt(questions)
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(markdown => {
        writeToFile(fileName, markdown);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();

