const inputTxt = document.querySelector('#user-input')
document.querySelector('#input-button').addEventListener('click', seekUser)



function seekUser() {
  loadingInfo();
  let avatarImg = ''
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.github.com/users/${inputTxt.value}`, true);
  xhr.onload = function() {
    console.log('this status', this.status)
    if (this.status === 404){
      avatarImg += `
      <figcaption>User not found</figcaption>
      <img src="https://i.stack.imgur.com/Esppm.png" alt="#">
      `
    }
    else if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      if (response.type === 'User'){  // możliwa inna odpowiedź Organization
        avatarImg += `
        <img src="${response.avatar_url}" alt="avatar of ${response.login}">
        <figcaption>avatar of ${response.login}</figcaption>
        `
      }
    }
    document.querySelector('.result-container').innerHTML = avatarImg
  }
  xhr.send(null);
  inputTxt.value = "";
}

function loadingInfo () {
  document.querySelector('.result-container').innerHTML  = '<i class="fa fa-spinner fa-spin fa-3x"></i>';
}