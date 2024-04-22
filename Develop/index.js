// Includes packages needed for this application.
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer')
const fs = require('fs')

// Creates an array of questions for user input.
const questions = [
    {
        type:"input",
        name:"title",
        message:"Please enter the title of your application."
    },
    {
        type:"input",
        name:"description",
        message:"Please enter the description of your application."
    },
    {
        type:"input",
        name:"installation",
        message:"Please enter the installation instructions for your application."
    },
    {
        type:"input",
        name:"usage",
        message:"Please enter the usage of your application."
    },
    {
        type:"list",
        name:"license",
        message:"Please enter the license used for your application.",
        choices: ["MIT", "Apache", "ISC", "none"]
    },
    {
        type:"input",
        name:"contributing",
        message:"Please enter the names of the individuals that contributed to your application."
    },
    {
        type:"input",
        name:"tests",
        message:"Please include any test instructions for your application."
    },
    {
        type:"input",
        name:"email",
        message:"Please enter your email to address any questions regarding your application."
    },
    {
        type:"input",
        name:"github",
        message:"Please enter github profile link for your application."
    },
    
];

// The function to write README file.
function writeToFile(fileName, data) {}

// TODO: The function to initialize app.
function init() {
    inquirer.prompt (questions)
    .then(data => {
        //console.log(data)
        fs.writeFileSync("test.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
