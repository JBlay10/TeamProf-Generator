const employee = require('./Employee');


class manager extends employee {
    constructor (name, id, email, officeNum) {
        super(name, id, email);
        this.officeNumber = officeNum;
    }

    getRole () {
        return "Manager";
    }
}

module.exports = manager;