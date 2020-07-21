const allBtn = document.getElementById('all-droids__btn')


const getBtn = document.getElementById('get-btn')
const getInput = document.querySelector('.get-by-id')
const userInfo = document.getElementById('user-info')

allBtn.addEventListener('click', getAll)
getBtn.addEventListener('click', getDroid)


const url = 'http://localhost:3000/droids'

function getAll() {
  fetch(url)
  .then(res => res.json())
  .then( res => {
    console.log(res)
    res.forEach(elem => {
      userInfo.innerText += `
      ${elem.id}) Droid's name: ${elem.name} Droid's class : ${elem.class}`
    });
  })
}

function getDroid() {
  fetch(`http://localhost:3000/droids/${getInput.value}`)
  .then(res => res.json())
  .then(res => {
    userInfo.innerText = `Droid info
      Name: ${res.name}, Class: ${res.class}, Id: ${res.id}`
  })
}






// fetch('http://localhost:3000/droids/9')
//   .then(response => response.json())
//   .then(json => console.log(json));


// const url = 'http://localhost:3000/droids'

// const data = {
//   id: 12,
//   name: "ODX-9",
//   class: "medical droid"
// }

// const options = {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

// fetch(url, options)
//   .then(response => response.json())
//   .then(data => console.log(data))

// fetch(url, options)
//   .then(response => {
//     if (response.ok) {
//         return response.json()
//     } else {
//         return Promise.reject(response)
//     }
//   })
//   .then(response => {
//     console.log(response.status)
//   })
//   .catch(error => {
//     if (error.status === 404) {
//         console.log("ERROR 404");
//     }
//     if (error.status === 500) {
//       console.log("ERROR 500");
//     }
//   });