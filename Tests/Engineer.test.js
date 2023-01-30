const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('Jose', 10, 'yourName@email.com', 'yourName10');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github', () => {
    const engineer = new Engineer('name', 10, 'yourName@email.com', 'yourName10');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of employee', () => {
    const engineer = new Engineer('name', 10, 'yourName@email.com', 'yourName10');

    expect(engineer.getRole()).toEqual("Engineer");
});