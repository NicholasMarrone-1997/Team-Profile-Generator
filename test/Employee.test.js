// Starter file provided by Instructor (03/09/2021) AC

const {
  expect
} = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const emp = new Employee();
  expect(emp instanceof Employee).toEqual(true);
});

test("Can set name via constructor arguments", () => {
  const name = "Nick";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const value = 100;
  const emp = new Employee("Test", value);
  expect(emp.id).toBe(value);
});

test("Can set email via constructor argument", () => {
  const value = "nick@gmail.com";
  const emp = new Employee("Test", 1, value);
  expect(emp.email).toBe(value);
});

describe("getName", () => {
  it("Can get name via getName()", () => {
      const value = "Nick";
      const emp = new Employee(value);
      expect(emp.getName()).toBe(value);
  });
});

describe("getId", () => {
  it("Can get id via getId()", () => {
      const value = 100;
      const emp = new Employee("Test", value);
      expect(emp.getId()).toBe(value);
  });
});

describe("getEmail", () => {
  it("Can get email via getEmail()", () => {
      const value = "test@test.com";
      const emp = new Employee("Test", 1, value);
      expect(emp.getEmail()).toBe(value);
  });
});

describe("getRole", () => {
  it("getRole() should return \"Employee\"", () => {
      const value = "Employee";
      const emp = new Employee("Nick", 1, "nick@gmail.com");
      expect(emp.getRole()).toBe(value);
  });
});