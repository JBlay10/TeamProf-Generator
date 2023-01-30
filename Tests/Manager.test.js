const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('Jose', 1, 'yourName@email.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get manager role', () => {
    const manager = new Manager('name', 1, 'yourName@email.com', 1);

    expect(manager.getRole()).toEqual("Manager");
});