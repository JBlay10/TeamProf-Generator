const genHTML = require('./src/GenHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

// Manager prompt questions
const managerQuest = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager?',
        validate: nameInput => {
            if(nameInput){
                return true;
            }else{
                console.log('Enter manager name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID number of the manager?',
        validate: idInput => {
            if(idInput){
                return true;
            }else{
                console.log('Enter manager ID number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the manager?',
        validate: emailInput => {
            if(emailInput){
                return true;
            }else{
                console.log('Enter manager email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the manager?',
        validate: offInput => {
            if(offInput){
                return true;
            }else{
                console.log('Enter manager office number.');
                return false;
            }
        }
    }
];

const menuQuest = {
    type: 'list',
    name: 'addFinish',
    message: 'What would you like to do next',
    choices: ['Add  more employees', 'Get employee page']
}

const employeeQuest = [
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
        validate: nmInput => {
            if(nmInput){
                return true;
            }else{
                console.log('Enter employee name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?",
        validate: eidInput => {
            if(eidInput){
                return true;
            }else{
                console.log('Enter employee ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?",
        validate: eeInput => {
            if(eeInput){
                return true;
            }else{
                console.log('Enter employee email.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        when: (input) => input.role === 'Engineer',
        validate: ghInput => {
            if(ghInput){
                return true;
            }else{
                console.log('Enter Github username.');
                return false;
            }
        }
    },

    {
    type: 'input',
    name: 'school',
    message: "What is the intern's school name?",
    when: (input) => input.role === 'Intern',
    validate: isInput => {
        if(isInput){
            return true;
        }else{
            console.log("Enter intern's school.");
            return false;
        }
    }
}
];

const teamArray = [];

const promptMenu = () => {
    inquirer.prompt(menuQuest).then(answer => {

        if(answer.addFinish === 'Add  more employees'){
            addEmployee()
        }else{
            writeFile()
        }
    })
}

const addManager = () => {
    inquirer.prompt(managerQuest).then(managerInfo => {
        let manager;
        manager = new Manager (managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber)
        teamArray.push(manager)
        promptMenu()
    }) 
    return teamArray;
}

const addEmployee = () => {
    inquirer.prompt(employeeQuest).then(employeeInfo => {

        let employee;

        if(employeeInfo.role === "Engineer") {
            employee = new Engineer (employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.github);

        }else if(employeeInfo.role === "Intern") {
            employee = new Intern (employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.school)
        }
        teamArray.push(employee)
        promptMenu()
    })
}

const writeFile = () => {
    fs.writeFile('./dist/index.html', genHTML(teamArray), (err) => {
        if (err) {
            console.log(err);
            return
        }else{
            console.log('Your team page has been created!')
        }
    })
}

addManager();