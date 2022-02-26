//This is the master JavaScript file for the HTML Help documentation.

/* These functions (doSection, noSection) are used to make sidebars appear and disappear.
*/

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

function doSection (secNum){
	//display the section if it's not displayed; hide it if it is displayed
	if (secNum.style.display=="none"){secNum.style.display=""}
	else{secNum.style.display="none"}
}

function noSection (secNum){
	//remove the section when user clicks in the opened DIV
	if (secNum.style.display==""){secNum.style.display="none"}
}

function doExpand(paraNum,arrowNum){
	//expand the paragraph and rotate the arrow; collapse and rotate it back
	if (paraNum.style.display=="none"){paraNum.style.display="";arrowNum.src="arrowdn.gif"}
	else{paraNum.style.display="none";arrowNum.src="arrowrt.gif"}
}

//These functions control the behavior of the homepage go arrows.
function liteGo(spNo){
	spNo.style.background="#cc0033";
	spNo.style.color="#FFFFFF";
}

function liteOff(spNo){
	spNo.style.background="transparent";
	spNo.style.color="#000000";
}

//Insert new functions here. Please use unique identifiers and comment liberally.

// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
//  var popup = "astrng";
  popup.classList.toggle("show");
}


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

