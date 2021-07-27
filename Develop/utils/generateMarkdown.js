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
const generateSection = (propertyContent, headerText) => {
  if (!propertyContent) {
    return ``;
  }
  return `## ${headerText}
  ${propertyContent}
  `
}
const generateOptionalLink = (property, linkText) => {
  if (!property) {
    return ``;
  }
  return `- [${linkText}](#${linkText.toLowerCase()})`
}


function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description${renderLicenseSection(data.license)}
  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  ${generateOptionalLink(data.installInstructions, `Installation`)}
  ${generateOptionalLink(data.usageInfo, `Usage`)}
  ${generateOptionalLink(data.contribution, `Contribution`)}
  ${generateOptionalLink(data.testInstructions, `Testing`)}
  - [Questions](#questions)

  ${generateSection(data.installInstructions, `Installation`)}

  ${generateSection(data.usageInfo, `Usage`)}

  ${generateSection(data.contribution, `Contribution`)}

  ${generateSection(data.testInstructions, `Testing`)}

  ## Questions
  If you have any questions:

  Find me on <a href = "http://www.github.com/${data.github}" target = "_blank">GitHub</a>

  or

  Contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
