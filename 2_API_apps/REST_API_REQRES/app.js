const createBtn = document.getElementById('create-btn')
const deleteBtn = document.getElementById('delete-btn')

createBtn.addEventListener('click', createUser)
deleteBtn.addEventListener('click', deleteUser)


const url = 'https://reqres.in/api/users';


function createUser () {
    const data = {};
    data.firstname = document.querySelector('.user-name').value
    data.lastname  = document.querySelector('.user-last-name').value
    const json = JSON.stringify(data);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
      const users = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "201") {
        console.table(users);
      } else {
        console.error(users);
      }
    }
    xhr.send(json);
}

// needs further work
function deleteUser () {
  console.log('clicked')
  const usrId = document.querySelector('.user-id').value
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", url+`/${usrId}`, true);
  xhr.onload = function () {
    const users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(users);
    } else {
      console.error(users);
    }
  }
  xhr.send(null);

}