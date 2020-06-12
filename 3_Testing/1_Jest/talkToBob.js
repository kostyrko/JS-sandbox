function talkToBob(info = "") {
  if(info.endsWith("?") && info !== info.toUpperCase()) return "Sure";
  if(info === info.toUpperCase() && !info.endsWith("?") && info.length !== 0) return "Whoa, chill out!";
  if(info.endsWith("?")) return "Calm down, I know what I'm doing!";
  if(info === "") return "Fine. Be that way!";
  else return 'Whatever.'
};

module.exports = talkToBob;

console.log(talkToBob("whatever"))