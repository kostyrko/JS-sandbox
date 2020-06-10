function talkToBob(info = "") {
  if(info.endsWith("?") && info !== info.toUpperCase()) return "Sure";
  if(info === info.toUpperCase()) return "Whoa, chill out!";
};

module.exports = talkToBob;

// console.log(talkToBob("WHAT?"))