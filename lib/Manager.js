// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
        // and other properties
    }
}

// const eng1 = new Engineer("Danish", "danish@gmail.gov", "danisheng");

module.exports = Manager;
