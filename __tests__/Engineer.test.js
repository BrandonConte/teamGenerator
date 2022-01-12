const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Should represent an object with the properties of an Engineer', () => {
        const engineer = new Engineer('Brandon', 2, 'Bconte950@gmail.com', 'brandonGit');

        expect(engineer.name).toBe('Brandon');
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toBe('Bconte950@gmail.com');
        expect(engineer.github).toBe('brandonGit');
    });
});