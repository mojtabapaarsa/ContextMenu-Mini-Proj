let contextMenu = document.querySelector('#contextMenu');

document.addEventListener('contextmenu' , showMenu)
window.addEventListener('keydown' , escHide)
window.addEventListener('click' , hideMenu)

function showMenu(event) {
    event.preventDefault()
    let x = event.offsetX
    let y = event.offsetY
    let winWidth = window.innerWidth ,
        cmWidth = contextMenu.offsetWidth
    let winHeight = window.innerHeight ,
        cmHeight = contextMenu.offsetHeight

    x = x >  winWidth - cmWidth ?  winWidth - cmWidth : x;
    y = y >  winHeight - cmHeight ?  winHeight - cmHeight : y;

    contextMenu.style.left = x+'px'
    contextMenu.style.top = y+'px'
    contextMenu.style.display= 'block'
}
function escHide(event) {
    console.log(event)
   if(event.keyCode === 27) {
       contextMenu.style.display ='none'
   }
}
function hideMenu() {
    contextMenu.style.display ='none'
}


 