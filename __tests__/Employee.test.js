const Employee = require('../lib/Employee');

test('Check if name is a valid string', () => {
    const employee = new Employee('Brandon');

    expect(employee.name).toBe('Brandon')
})

test('Check for ID', () => {
    const employee = new Employee('Brandon', 2);

    expect(employee.id).toEqual(expect.any(Number));
})

test('Check for valid Email', () => {
    const employee = new Employee('Brandon', 2, 'Bconte950@gmail.com');
function test(EmployeeEmail) {
    // Looking for an @ sign inside of the email. 
    // If there is returns true, if not false. 
    // More robust testing for something that might not be specified. 
    if(EmployeeEmail.indexOf('@') !== -1){
        return true;
    }
    else { return false;
    }
}
    expect(test(employee.email)).toBe(true);
})