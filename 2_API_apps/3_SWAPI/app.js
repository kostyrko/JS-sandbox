// https://swapi.dev/
// https://swapi.dev/documentation
// https://fontawesome.com/v4.7.0/icons/

document.querySelector("button").addEventListener("click", findSomeone);
const name    = document.querySelector(".name");
const height  = document.querySelector(".height");
const mass    = document.querySelector(".mass");
const birth   = document.querySelector(".birth");

function findSomeone() {
  loadingInfo();
  // randomize 88 stands for number of people in API
  let randomNum = Math.floor(Math.random() * 88 + 1);
  // add then as the request takes time = get and after you get it (then) use response.data etc
  axios
    .get(`https://swapi.dev/api/people/${randomNum}`)
    .then(function (response) {
      updateInfo(response.data);
    }).catch(e =>{ // catch an error
      // console.log('error')
      updateInfoWithError();
    })
}

function updateInfo(data) {
  name.innerText = data.name;
  height.innerText = `Height: ${data.height}`;
  mass.innerText = `Mass: ${data.mass}`;
  birth.innerText = `Birth year: ${data.birth_year}`;
}

function updateInfoWithError() {
  name.innerText = 'This person is not available';
  height.innerText = '';
  mass.innerText = '';
  birth.innerText = '';
}

function loadingInfo () {
  name.innerHTML = '<i class="fa fa-spinner fa-spin fa-3x"></i>';
  height.innerText = '';
  mass.innerHTML = '';
  birth.innerText = '';
}
