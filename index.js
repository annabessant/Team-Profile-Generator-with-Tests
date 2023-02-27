const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


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
        message: "What is Manager's first name?",
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
        message: "What is Engineer's first name?",
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
        message: "What is Intern's first name?",
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
