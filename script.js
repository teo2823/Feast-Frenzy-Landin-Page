// Icon menu
let barMenu = document.querySelector('.fa');

//Barra del navegador movil
let nav = document.querySelector('.header__nav');

//fondo borroso

let blurBackground = document.querySelector('.header__blur-content');

barMenu.addEventListener('click', ()=>{
    console.log(barMenu);
})

function abrirMenu(){
    nav.style.width = "200px";
    blurBackground.style.display = "block";
}

function cerrarMenu(){
    nav.style.width = '0px';
    blurBackground.style.display = 'none';
}

barMenu.addEventListener('click', abrirMenu);

blurBackground.addEventListener('click', cerrarMenu);