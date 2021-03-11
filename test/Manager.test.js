// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const value = 100;
    const emp = new Manager("Eric", 1, "eric@gmail.com", value);
    expect(emp.officeNumber).toBe(value);
});

test('getRole() should return "Manager"', () => {
    const value = "Manager";
    const emp = new Manager("Kaiba", 1, "kaiba@seto.com", 101);
    expect(emp.getRole()).toBe(value);
});

test("Can get office number via getOffice()", () => {
    const value = 100;
    const emp = new Manager("Larry", 1, "larry@gmail.com", value);
    expect(emp.getOfficeNumber()).toBe(value);
});
