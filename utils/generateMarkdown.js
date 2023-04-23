// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const badges = {
    mit:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    isc:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    modz:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    apache:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenselink = {
    mit:'[MIT License](https://opensource.org/licenses/MIT)',
    ics: '[ISC License](https://en.wikipedia.org/wiki/ISC_license)',
    modz: '[Mozilla Public License](https://www.mozilla.org/en-US/MPL/)',
    apache: '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)'
  }
  return licenselink[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `Licensed under the ${renderLicenseLink(license)} license`
  }else {
    return ''
  }

}

// A function to generate markdown for README

function generateMarkdown(data) {
  return `
# ${data.title}

  ${renderLicenseBadge(data.license)} 
  
  ## Table of Contents
  - [Project Description](#description)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Contribution](#contribution)
  - [Questions](#questions)
  - [License](#license)
  - [Test](#test)


  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contribution
  ${data.contribution}


  ## Questions
  -${data.questions}

  -${data.email}

  
  ## License
  ${renderLicenseSection(data.license)}
  
  
  ## Test
  ${data.test}


`;
}



module.exports = generateMarkdown;
