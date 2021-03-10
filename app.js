// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const prompts = {
    Manager: [{
            type: "input",
            name: "name",
            message: "What is the manager's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a name for the manager."
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter manager's id."
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        },
        {
            type: "list",
            name: "newEmp",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"]
        }
    ],

    Engineer: [{
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter engineer's name"
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter engineer's id: "
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?"
            //     validate: (value) => {
            //         if (emailValidator.validate(value)){
            //             return true
            //         } else {
            //             return "Please enter a valid emai address"
            //         }
            //     },
            // },
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter engineer's github username: "
                }
            },
        },
        {
            type: "list",
            name: "newEng",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"]
        }
    ],

    Intern: [{
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter intern's name: "
                }
            },
        },
        {
            type: "input",
            name: "id",
            messate: "What is the intern's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter intern's id: "
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter intern's email address: "
                }
            },
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the school the intern attends: "
                }
            },
        },
        {
            type: "list",
            name: "newInt",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"]
        }
    ]
};

const selectType = [
    {
        type: "list",
        name: "memType",
        message: "Choose role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```