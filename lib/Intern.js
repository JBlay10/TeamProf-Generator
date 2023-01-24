const employee = require('./Employee');

// Intern extends on Employye 
class intern extends employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool () {
        return this.school
    }

    getRole () {
        return "Intern";
    }
}

module.exports = intern;