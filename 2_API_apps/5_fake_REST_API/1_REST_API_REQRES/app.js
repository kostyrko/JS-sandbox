const createBtn = document.getElementById('create-btn')
const deleteBtn = document.getElementById('delete-btn')
const getBtn = document.getElementById('get-btn')
// const updateBtn = document.getElementById('update-btn')
const userInfo = document.getElementById('user-info')

createBtn.addEventListener('click', createUser)
deleteBtn.addEventListener('click', deleteUser)
getBtn.addEventListener('click', getUser)
// updateBtn.addEventListener('click', updateUserInfo)


const url = 'https://reqres.in/api/users';


function getUser () {
  const xhr = new XMLHttpRequest();
  const usrId = document.querySelector('.get-by-id').value

  xhr.open("GET", url+`/${usrId}`, true);
  xhr.onload = function () {
    console.log(xhr.responseText)
    const user = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.log(user.data.first_name)
      userInfo.innerText = `User info
      First name: ${user.data.first_name}, Last name: ${user.data.last_name}, Id: ${user.data.id}`

    } else {
      console.log('error')
      console.error(user);
    }
  }
  xhr.send(null);
}


function createUser () {
    const data = {};
    data.firstname = document.querySelector('.user-name').value
    data.lastname  = document.querySelector('.user-last-name').value
    const json = JSON.stringify(data);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
      const user = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "201") {
        userInfo.innerText = `User created
        First name: ${user.firstname}, Last name: ${user.lastname}, Id: ${user.id}`
      } else {
        console.error(users);
      }
    }
    xhr.send(json);
}


function deleteUser () {
  const usrId = document.querySelector('.delete-by-id').value
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", url+`/${usrId}`, true);
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "204") {
      userInfo.innerText = `User width id: ${usrId} was deleted`
    } else {
      console.error(users);
    }
  }
  xhr.send(null);
}

// function updateUserInfo () {
//   const usrId = document.querySelector('.update-by-id').value
//   const data = {};
//   data.first_name = document.querySelector('.user-name--update').value
//   const json = JSON.stringify(data);
//   const xhr = new XMLHttpRequest();
//   xhr.open("PUT", url+`/${usrId}`, true);
//   xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
//   xhr.onload = function () {
//     const user = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "201") {
//       console.log(data.first_name)
//       // userInfo.innerText = `User created
//       // First name: ${user.firstname}, Last name: ${user.lastname}, Id: ${user.id}`
//     } else {
//       console.log('ups')
//       console.error(user);
//     }
//   }
//   xhr.send(json);
// }