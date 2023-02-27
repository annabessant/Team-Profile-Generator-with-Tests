const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const generateHTML = require(`./src/generateHTML`);
let answersArr = [];


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Menu 

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'Please select a role of the employee in your team',
        choices: ['Manager', 'Engineer', 'Intern', 'DONE'],
    }
];

// Manager

const manager = [
    {
        type: 'input',
        name: 'name',
        message: "What is Manager's full name?",
    },
    {
        type: 'number',
        name: 'id',
        message: "What is Manager's ID number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is Manager's email?",
    },
    {
        type: 'number',
        name: 'office',
        message: "What is Manager's office number?",
    },
];

// Engineer

const engineer = [
    {
        type: 'input',
        name: 'name',
        message: "What is Engineer's full name?",
    },
    {
        type: 'number',
        name: 'id',
        message: "What is Engineer's ID number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is Engineer's email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is Engineer's Github username?",
    },
];

// Intern

const intern = [
    {
        type: 'input',
        name: 'name',
        message: "What is Intern's full name?",
    },
    {
        type: 'number',
        name: 'id',
        message: "What is Intern's ID number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is Intern's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does Intern go?",
    },
];

// initialize the app
function init () {
    // prompts 
    inquirer.prompt(questions).then(answers => {
        // if the task is comlete and you are DONE
        if (answers.role === 'DONE') {
            console.log(answersArr);
            generateTeam();
            return;
        }

        // Adding manager 
        if (answers.role === 'Manager') {
            inquirer.prompt(manager).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            answersArr.push(manager);
            init();
            })
        }
        // Adding engineer
        if (answers.role === 'Engineer') {
            inquirer.prompt(engineer).then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            answersArr.push(engineer);
            init();
            })
        }
        // Adding intern
        if (answers.role === 'Intern') {
            inquirer.prompt(intern).then(answers => {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            answersArr.push(intern);
            init();
            })
        }
    })
};
init();

// new members
function generateTeam() {
    fs.writeFileSync(`./dist/generatedTeam.html`, generateHTML(answersArr), "utf-8");
    console.log('My Team')
};