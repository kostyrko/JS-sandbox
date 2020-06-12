
const talkToBob = require('./talkToBob');

describe('Function - talkToBob', () => {
  test("answers Sure, if ask him a question", () => {
    expect(talkToBob("How are You?")).toBe("Sure")
  });
  test("Answers 'Whoa, chill out!' if you yell at him", () => {
    expect(talkToBob("DON'T")).toBe("Whoa, chill out!")
  });
  test("He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.", () => {
    expect(talkToBob("WHAT?")).toBe("Calm down, I know what I'm doing!")
  });
  test("He says 'Fine. Be that way!' if you address him without actually saying anything.", () => {
    expect(talkToBob("")).toBe('Fine. Be that way!')
  });
  test("He answers 'Whatever.' to anything else.", () => {
    expect(talkToBob("whatever")).toBe('Whatever.')
  });
});