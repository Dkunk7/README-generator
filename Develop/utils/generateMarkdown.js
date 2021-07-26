// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license[0] === `APACHE 2.0`) {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license[0] === `MIT`) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license[0] === `GPL 3.0`) {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license[0] === `BSD 3`) {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license[0] === `None` || !license[0]) {
    return ``;
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license[0] === `None` || !license[0]) {
    return ``;
  } else {
    return ` and License`;
  }
}

// TODO: Create a function to generate markdown for README
const generateInstallation = installInstructions => {
  if (!installInstructions) {
    return ``;
  }
  return `## Installation
  ${installInstructions}
  `
}
const generateOptionalLink = (property, linkText) => {
  if (!property) {
    return ``;
  }
  return `- [${linkText}](#${linkText.toLowerCase()})`
}

const generateContribution = contribution => {
  if (!contribution) {
    return ``;
  }
  return `## Contribution
  ${contribution}
  `
}
function generateMarkdown(data) {
  console.log(data);
  console.log(data.license[0]);
  return `# ${data.title}
  
  ## Description${renderLicenseSection(data.license)}
  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  ${generateOptionalLink(data.installInstructions, `Installation`)}
  - [Usage](#usage)
  ${generateOptionalLink(data.contribution, `Contribution`)}
  - [Testing](#testing)
  - [Questions](#questions)

  ${generateInstallation(data.installInstructions)}

  ## Usage
  ${data.usageInfo}

  ${generateContribution(data.contribution)}

  ## Testing
  ${data.testInstructions}

  ## Questions
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
