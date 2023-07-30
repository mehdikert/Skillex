
function bgHover(){
    let bg_input = document.querySelector('.bg-input');
    bg_input.classList.add('bg-input-class-hover');
    bg_input.classList.remove('bg-input-class-out');
    document.querySelector('.btn-form-nav').style.transitionDuration = '2s'
   document.querySelector('.btn-form-nav').style.background = 'transparent';
}
function bgOut(){
    let bg_input = document.querySelector('.bg-input');
    bg_input.classList.remove('bg-input-class-hover')
    bg_input.classList.add('bg-input-class-out')
    document.querySelector('.btn-form-nav').style.background = '#97c680';
}


let PicNav = document.querySelectorAll('.header-pictures-container')
let divPic = document.querySelectorAll(`.header-pictures-container div`)
function changeSize(i){

  for(let y = 0 ; y < PicNav.length ; y++){
    PicNav.item(y).classList.add('div-not-active') ;
    PicNav.item(y).classList.remove('div-active') ;
    divPic.item(y).classList.add('div-not-active-display')  
   } 
  PicNav.item(i).classList.add('div-active');
  PicNav.item(i).style.transition = '0.3s'
  divPic.item(i).classList.remove('div-not-active-display');
}

function initSize(){
    for(let y = 0 ; y < PicNav.length ; y++){
        PicNav.item(y).classList.add('div-not-active') ;
        PicNav.item(y).classList.remove('div-active') ;
        divPic.item(y).classList.add('div-not-active-display')  
       } 
  PicNav.item(0).classList.add('div-active');
  PicNav.item(0).style.transition = '1s';
  divPic.item(0).classList.remove('div-not-active-display');
}


function navLinkAnim(i){
    let div = document.querySelectorAll('div-anime-nav-link') ;
    for(let y = 0 ; y < div.length ; y++){
        div.item(y).classList.remove('anime-nav-link') ; 
       } 
       div.item(i).classList.add('anime-nav-link') ; 
}