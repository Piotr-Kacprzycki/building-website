const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});


const heading = document.querySelector('.info-heading-js');

let count = 0;
let txt = "Nowoczesna modernizacja";

const typingText = ()=>{

heading.textContent += txt[count];


count++
if(count === txt.length){

clearInterval(indexTyping)



}

}


 const indexTyping = setInterval(typingText,100);