class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //take name from input
getName () {
    return this.name;
}
//take id from input
getId () {
    return this.id;
}
//take email from input
getEmail () {
    return this.email;
}
//take employee role
getRole () {
    return 'Employee';
}
};

module.exports = employee;

