// Packets to be included with this application
const inquirer = require('inquirer');
const fs = require('fs');

// Utilizing another js file that contains the code to generate markdown language
const generateReadMe = require("./utils/generateMarkdown.js");

// File name as a constant
const fileName = "README.md";

// Array of questions objects that will be asked from the user
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
        when: ({ confirmInstallation }) => {
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
        when: ({ confirmUsage }) => {
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
        when: ({ confirmContribution }) => {
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
        when: ({ confirmTest }) => {
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

// Function that when called, creates a file called README.md and writes markdown language to it. If error occurs, user will be notified
// Takes two parameters, name of file and the user inputted data
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data.toString(), function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("Your professionally created README.md has been generated!");

    });
}

// Function that welcomes the user to the application
const init = () => {
    console.log("Welcome to a professional README.md generator! Begin by answering the following prompts.");
    console.log("=========================");
}

// function that begins to ask user questions about their README file
const promptUser = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();

// Function call to begin asking the user questions about their README file
// The answers are passed to generateReadMe where the data is being processed and then returned as markdown language
// Then that markup language is passed to the writeToFile function that writes to the README.md file
promptUser()
    .then(answers => {
        return generateReadMe(answers);
    })
    .then(markdown => {
        writeToFile(fileName, markdown);
    })
    .catch(err => {
        console.log(err);
    });