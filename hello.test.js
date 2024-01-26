const hello = require("./hello");
describe("Hello World from South Africa!", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from South Africa!");
  });
});
