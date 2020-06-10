
const talkToBob = require('./talkToBob');

describe('Function - talkToBob', () => {
  test("answers Sure, if ask him a question", () => {
    expect(talkToBob("How are You?")).toBe("Sure")
  });
  test("Answers 'Whoa, chill out!' if you yell at him", () => {
    expect(talkToBob("WHAT?")).toBe("Whoa, chill out!")
  });
});