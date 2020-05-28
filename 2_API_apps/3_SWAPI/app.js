// https://swapi.dev/
// https://swapi.dev/documentation

document.querySelector('button').addEventListener('click', findSomeone);

function findSomeone () {
  axios.get('https://swapi.dev/api/people/1').then(function(response){
    console.log(response.data);
  })
}