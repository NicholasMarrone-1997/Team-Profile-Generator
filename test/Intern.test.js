// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const value = "UNCC";
    const emp = new Intern("Josh", 1, "josh@gmail.com", value);
    expect(emp.school).toBe(value);
});

test("getRole() should return \"Intern\"", () => {
    const value = "Intern";
    const emp = new Intern("Lauren", 1, "lauren@gmail.com", "UNCC");
    expect(emp.getRole()).toBe(value);
});

test("Can get school via getSchool()", () => {
    const value = "UNCC";
    const emp = new Intern("Kiwi", 1, "kiwi@gmail.com", value);
    expect(emp.getSchool()).toBe(value);
});
