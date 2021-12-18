// Variable that will hold the license link
let licenseLink = '';

// Function that returns the License section of the README.md and fills the data with what the user had chosen
function renderLicenseSection(data) {

    if (data.license === "MIT") {
        licenseLink = 'https://choosealicense.com/licenses/mit/';
    } else if (data.license === "Apache License 2.0") {
        licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
    } else if (data.license === "GNU GPLv3") {
        licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
    } else if (data.license === "ISC License") {
        licenseLink = 'https://choosealicense.com/licenses/isc/';
    }
    return `## License \n
_This application has the ${data.license}._\n
For more information, [license](${licenseLink})
    `;
}

// This function returns Installation instuctions if the user had chosen to do so
function renderInstallationInstructions(data) {
    if (data.confirmInstallation) {
        return `## Installation
${data.installation}`;
    } else {
        return ``;
    }
}

// This function returns Usage information if the user had chosen to do so
function renderUsageInformation(data) {
    if (data.confirmUsage) {
        return `## Usage
${data.usage}`;
    } else {
        return ``;
    }
}

// This function returns Contribution guidelines if the user had chosen to do so
function renderContribution(data) {
    if (data.confirmContribution) {
        return `## Contribution
${data.contribution}`;
    } else {
        return ``;
    }
}

// This function returns any Tests that the user wishes to include
function renderTest(data) {
    if (data.confirmTest) {
        return `## Test
${data.test}`;
    } else {
        return ``;
    }
}

// This function returns Table of content items that the user had chosen to include
function renderAdditionalContent(data) {
    var confirmArr = [];

    if (data.confirmInstallation) {
        var install = `* [Installation](#installation)`;
        confirmArr.push(install);
    }
    if (data.confirmUsage) {
        var usage = `* [Usage](#usage)`;
        confirmArr.push(usage);
    }
    if (data.confirmContribution) {
        var contribution = `* [Contribution Guidelines](#contribution)`;
        confirmArr.push(contribution);
    }
    if (data.confirmTest) {
        var test = `* [Test](#test)`;
        confirmArr.push(test);
    }

    var arrToRet = confirmArr.join("\r\n");
    return arrToRet;
}

// This function returns the complete README.md that gets written as a file
function generateMarkdown(data) {

    return `# ${data.title}
[![License](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/MIT)
## Description 
${data.description} 
## Table of Contents 
${renderAdditionalContent(data)}
* [License](#license)
* [Questions](#questions) 
${renderInstallationInstructions(data)}
${renderUsageInformation(data)}
${renderContribution(data)}
${renderTest(data)}
${renderLicenseSection(data)}
## Questions 
Please do not hesitate to contact me with further questions!
* GitHub: [${data.username}](https://github.com/jlusa101) 
* Email: ${data.email}
`;
}

// Exporting this source file to be used by other source files
module.exports = generateMarkdown;