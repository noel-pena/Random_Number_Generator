let randomNum = Math.floor(Math.random() * 100) + 1;
document.getElementsByClassName('response');
function onButtonClick() {
    document.getElementById('responses').innerHTML = randomNum;
  }
  let button = document.querySelector('button');
  button.addEventListener('click', onButtonClick);