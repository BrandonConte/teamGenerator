const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Should represent an object with properties of an Intern', () => {
        //setup
        const intern = new Intern('Brandon', 2, 'Bconte950@gmail.com', 'Example Uni');

        //execute

        //assertions
        expect(intern.name).toBe('Brandon');
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toBe('Bconte950@gmail.com');
        expect(intern.school).toBe('Example Uni');
    });
});