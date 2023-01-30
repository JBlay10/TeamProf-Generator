const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('Jose', 10, 'yourName@email.com', 'Vanderbilt');

    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school', () => {
    const intern = new Intern('name', 10, 'yourName@email.com', 'schoolName');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get employee role', () => {
    const intern = new Intern('name', 10, 'yourName@email.com', 'schoolName');

    expect(intern.getRole()).toEqual("Intern");
});