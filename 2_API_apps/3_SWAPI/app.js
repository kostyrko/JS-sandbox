// https://swapi.dev/
// https://swapi.dev/documentation

document.querySelector('button').addEventListener('click', findSomeone);
const name = document.querySelector('.name')

function findSomeone () {
  // randomize 88 stands for number of people in API
  let randomNum = Math.floor((Math.random()*88) +1);

  // add then as the request takes time = get and after you get it (then) use response.data etc
  axios.get(`https://swapi.dev/api/people/${randomNum}`).then(function(response){
    updateInfo(response.data);
  })
}

function updateInfo(data) {
  name.innerText = data.name
}