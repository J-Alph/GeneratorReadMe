// A function that returns a license badge based on which license is passed in
// If there is no license, function returns an empty string

function renderLicenseBadge(license) {
  if(license && license !== "n/a"){
  const badges = {
    mit:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    isc:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    modz:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    apache:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  return badges[license]
}else
  return ' ';
   
}


// A function that returns the license link
// Returns an empty string without license selection
function renderLicenseLink(license) {  
 if(license && license !== "n/a"){ 
  const licenselink = {
    mit:'[MIT License](https://opensource.org/licenses/MIT)',
    ics: '[ISC License](https://en.wikipedia.org/wiki/ISC_license)',
    modz: '[Mozilla Public License](https://www.mozilla.org/en-US/MPL/)',
    apache: '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)'
  }
  return licenselink[license]
 }else
  return ' ';
}

// A function that returns the license section of README
// Returns an empty string without license selection
function renderLicenseSection(license) {
  if(license && license !== "n/a"){
    return `Licensed under the ${renderLicenseLink(license)} license`
  }else {
    return '';
  }

}

// A function to generate the markdown for README

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

  ## License
  ${renderLicenseSection(data.license)}

  ## Questions
  -${data.questions}

  -${data.email}
  
  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ![screen-gif](./assets/images/gifreadme.gif)
`;
}



module.exports = generateMarkdown;
