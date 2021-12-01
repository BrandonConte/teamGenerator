const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('../src/page-template');
const writeFile = require('../utils/generate-site');

function Team() {
    this.manager;
    this.employees = [];
};

Team.prototype.initializeManager = function() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: "What is the Team Manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log( "Please enter your Team Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the Team Manager's employee ID number?",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                
                } else {
                    console.log("Please enter a valid employee ID number for your Team Manager!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Team Manager's email address?",
            validate: managerEmailInput => {
                if (managerEmailInput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                        return true;
                } else {
                        console.log("Please enter a valid email address.");
                        return false;
                }
            }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is the Team Manager's office number?",
            validate: managerofficeNumberInput => {
                if (managerofficeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the valid office number of your Team Manager.");
                    return false;
                }
            }
        }])
        .then(({ name, id, email, officeNumber }) => {
            this.manager = new Manager(name, id, email , officeNumber);

            
            this.initializeTeam();
        });
};






Team.prototype.initializeTeam = function() {
    inquirer
        .prompt([{

            type: 'list',
            name: 'employeeType',
            message: "Select which type of employee you'd like to add",
            choices: ['Engineer', 'Intern', "I don't want to add more employees"]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
            when: ({ employeeType }) => {
                if (employeeType === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log( "Please enter the engineer's name!");
                    return false;
                }
            },
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the engineer's employee ID number?",
            when: ({ employeeType }) => {
                if (employeeType === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                
                } else {
                    console.log("Please enter a valid employee ID number for the engineer.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            when: ({ employeeType }) => {
                if (employeeType === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: engineerEmailInput => {
                if (engineerEmailInput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                        return true;
                } else {
                        console.log("Please enter a valid email address.");
                        return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUser',
            message: "What is the engineer's GitHub username?",
            when: ({ employeeType }) => {
                if (employeeType === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: engineerGithubUserInput => {
                if (engineerGithubUserInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            when: ({ employeeType }) => {
                if (employeeType === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log( "Please enter the intern's name!");
                    return false;
                }
            },
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the intern's employee ID number?",
            when: ({ employeeType }) => {
                if (employeeType === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                
                } else {
                    console.log("Please enter a valid employee ID number for the intern.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            when: ({ employeeType }) => {
                if (employeeType === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: internEmailInput => {
                if (internEmailInput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                        return true;
                } else {
                        console.log("Please enter a valid email address.");
                        return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school name?",
            when: ({ employeeType }) => {
                if (employeeType === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school name.");
                    return false;
                }
            }
        }
    ])
    .then(({ employeeType, name, id, email, githubUser, school}) => {
        if (employeeType === 'Engineer') {
            this.employees.push(new Engineer(name, id, email, githubUser));

            return this.initializeTeam();
        } else if (employeeType === 'Intern') {
            this.employees.push(new Intern(name, id, email, school));

            return this.initializeTeam();
        } else {
           generatePage(this.manager, this.employees)
                .then(data => {
                    writeFile(data)
                });
        }
    });

};

module.exports = Team;