const inquirer = require('inquirer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');

function Team() {
    this.manager;
    this.intern;
    this.engineer;

    // add more positions here if any additional are added
};

Team.prototype.intializeManager = function() {
    return inquirer
        .prompt({
            type: 'input',
            name: 'name',
            message: "Who is the Team Manager?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your Team Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Team Manager's email address?",
            validate: managerEmailInput => {
                if (managerEmailInput && managerEmailInput.indexOf('@') != -1 && managerEmailInput.indexOf('.') != -1) {
                    return true;
                } else {
                    console.log('Please enter a valid email address.')
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: "What is the Team Manager's employee ID?",
            validate: managerIdInput => {
                if (managerIdInput && typeof managerIdInput === 'number') {
                    return true;
                } else {
                    console.log('Please enter a valid ID for your Team Manager');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officePhone',
            message: "Who is the Team Manager?",
            validate: managerOfficePhoneInput => {
                if (managerOfficePhoneInput && typeof managerOfficePhoneInput === 'number') {
                    return true;
                } else {
                    console.log('Please enter a valid office phone number for your Team Manager.');
                    return false;
                }
            }
        })

        .then(({name, id, email, officePhone}) => {
            this.manager = new Manager(name, id, email, officePhone);
        });
};