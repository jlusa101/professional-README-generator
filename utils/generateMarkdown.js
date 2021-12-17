let licenseLink = '';

function renderLicenseBadge(data) {
    if (data.license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (data.license === "Apache License 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (data.license === "GNU GPLv3") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (data.license === "ISC License") {
        return `[![License](https://img.shields.io/badge/license-ISC-brightgreen.svg)](https://opensource.org/licenses/ISC)`;
    }
}

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

function renderInstallationInstructions(data) {
    if (data.confirmInstallation) {
        return `## Installation
${data.installation}
      `;
    } else {
        return `## Installation`;
    }
}

function renderUsageInformation(data) {
    if (data.confirmUsage) {
        return `## Usage
${data.usage}
  `;
    } else {
        return `## Usage`;
    }
}

function renderContribution(data) {
    if (data.confirmContribution) {
        return `## Contribution
${data.contribution}
`;
    } else {
        return `## Contribution`;
    }
}

function renderTest(data) {
    if (data.confirmTest) {
        return `## Test
${data.test}
`;
    } else {
        return `## Test`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title}
${renderLicenseBadge(data)}
## Description \n
${data.description} \n
## Table of Contents \n
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution)
* [License](#license) \n
${renderInstallationInstructions(data)}
${renderUsageInformation(data)}
${renderContribution(data)}
${renderTest(data)}
${renderLicenseSection(data)}
## Questions \n
Please do not hesitate to contact me with further questions!
* GitHub: [${data.username}](https://github.com/jlusa101) 
* Email: ${data.email}
`;
}

module.exports = generateMarkdown;