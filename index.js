// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");

const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
  {
    type: 'list',
    message: 'What licenses do wish to use?',
    name: 'license',
    choices: ['MIT', 'ISC', 'MODZ', 'APACHE', 'n/a'],
    filter(val){
        return val.toLowerCase();
    }
  },
  {
    type: "input",
    name: "description",
    message: "Why did you build this project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation instructions for this file?",
  },
  {
    type: "input",
    name: "usage",
    message: "How will the user use this application?",
  },
  {
    type: "input",
    name: "contribution",
    message: "How to contribute?",
  },
  {
    type: "input",
    name: "questions",
    message: "What is your github information for contact?",
  },

  {
    type: "input",
    name: "email",
    message: "What email address will be best for contact?",
  },

  {
    type: "input",
    name: "test",
    message: "Are there test for this application?",
    
  },
]


function runPrompt (){
    return inquirer.prompt(questions)
        .then ((answers) => {
            const info = generateMarkdown(answers)
            fs.writeFile('README.md', info, (err) => {
                err ? console.error(err) : console.log ('Success today') 
        }


)
}
   )}

// Create a function to initialize app
function init() {
runPrompt()

}

// Function call to initialize app
init();
