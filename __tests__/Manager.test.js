const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Should represent an object with properties of a Manager', () => {

        const manager = new Manager('Brandon', 2, 'Bconte950@gmail.com', 10);


        expect(manager.name).toBe('Brandon');
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toBe('Bconte950@gmail.com');
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });
});