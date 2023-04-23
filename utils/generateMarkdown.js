// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   const badges = {
//     mit:
//     isc:
//     gnuplv3:
//   }
//   return badges[license]
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README



function generateMarkdown(data) {
  return `
# ${data.title}
  
  ## Table of Content
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Installation](#Installation)
  - [Questions](Questions)
  - [License](#License)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contributing
  ${data.contributing}


`;
}



module.exports = generateMarkdown;
