// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");
const createMarkdown = require('./utils/generateMarkdown');
const Markdown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input


// const generateReadMe = ({title, motivation, reason,  problem, learned, attention}) => {
//     return `# ${title}

//     ## Description
    
//     Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    
//     - What was your motivation? ${motivation}
//     - Why did you build this project? ${reason}
//     - What problem does it solve? ${problem}
//     - What did you learn? ${learned}
//     - What makes your project stand out? ${attention}
    
//     ## Table of Contents (Optional)
    
//     If your README is long, add a table of contents to make it easy for users to find what they need.
    
//     - [Installation](#installation)
//     - [Usage](#usage)
//     - [Credits](#credits)
//     - [License](#license)
    
//     ## Installation
    
//     What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    
//     ## Usage
    
//     Provide instructions and examples for use. Include screenshots as needed.
    
//     To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
//         md
//         ![screenshot of readme](GeneratorReadMe\assets\images\Screenshot 2023-04-23 004442.png)
       
    
//     ## Credits
    
//     List your collaborators, if any, with links to their GitHub profiles.
    
//     If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
//     If you followed tutorials, include links to those here as well.
    
//     ## License
    
//     The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
//     ---
    
//     🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
//     ## Badges
    
//     ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
//     Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
//     ## Features
    
//     If your project has a lot of features, list them here

//     ## How to Contribute

//     If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

//     ## Tests`

// }



const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
  {
    type: "input",
    name: "movtivation",
    message: "What was your motivation for the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Why did you build this project?",
  },
  {
    type: "input",
    name: "problem",
    message: "What problem does it solve?",
  },
  {
    type: "input",
    name: "learned",
    message: "What was learned while working on this project?",
  },
  {
    type: "input",
    name: "attention",
    message: "What makes your project stand out?",
  },
  {
    type: 'list',
    message: 'What licenses do wish to use?',
    name: 'licence',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    filter(val){
        return val.toLowerCase();
    }
  },
]



// .then(answers => {
//     const myReadMe = generateReadMe(answers);


// // TODO: Create a function to write README file


function runPrompt (){
    return inquirer.prompt(questions)
        .then ((answers) => {
            const info = generateMarkdown(answers)
            fs.writeFile('README.md', info, (err) => {
                err ? console.error(err) : console.log ('Success today') 
        }


// function writeToFile(fileName, data) {}
            )
}
   )}
// fs.writeFile('README.md', myReadMe, (err) => {
//     err ? console.error(err) : console.log ('Success today') 

// })
// TODO: Create a function to initialize app
function init() {
runPrompt()

}

// Function call to initialize app
init();
