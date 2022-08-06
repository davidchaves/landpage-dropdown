// Get the modal
const modal = document.getElementById('login-popup');

// When page is loaded
window.onload = function() {
    modal.style.display='block'
}

// When the user clicks anywhere outside of the modal, on "X" or cancel button, close it
modal.addEventListener('click', e => {
  const classNameOfClickedElement = e.target.classList[0];
  const classNames = ['cancelbtn', 'psw-fgt', 'close', 'modal'];
  const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement);

  if (shouldClosePopup) {
    window.location = 'index.html'
  }
})

