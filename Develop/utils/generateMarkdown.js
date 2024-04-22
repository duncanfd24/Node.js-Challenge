// Creates a function that returns a license badge based on which license is passed in.
// If there is no license, return an empty string.
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "ISC"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  else if (license === "none"){
    return ``
  }
}

// Creates a function that returns the license link.
// If there is no license, returns an empty string.
function renderLicenseLink(license) {
  if (license === "MIT"){
    return `https://opensource.org/licenses/MIT`
  }
  else if (license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "ISC"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  else if (license === "none"){
    return ``
  }
}

// Creates a function that returns the license section of README.
// If there is no license, returns an empty string.
function renderLicenseSection(license) {}

// Creates a function to generate markdown for README.
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Test Instructions](#tests)

## Description 
${data.description}

## Installation
${data.installation}

## Usage Information
${data.usage}

## License
 ${data.license}
 License URL: ${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Test Instructions
${data.tests}

## Questions
For any questions please reach out to me on github at ${data.github} or via email at ${data.email}
`;
}

module.exports = generateMarkdown;
