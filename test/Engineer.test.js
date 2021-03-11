// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const value = "githubUser";
    const emp = new Engineer("Test", 1, "nick@gmail.com", value);
    expect(emp.github).toBe(value);
});

test("getRole() should return \"Engineer\"", () => {
    const value = "Engineer";
    const emp = new Engineer("Nick", 1 , "nick@gmail.com", "githubUser");
    expect(emp.getRole()).toBe(value);
});

test("Can get GitHub username via getGithub()", () => {
    const value = "githubUser";
    const emp = new Engineer("Andrew", 1, "andrew@gmail.com", value);
    expect(emp.getGithub()).toBe(value);
});
