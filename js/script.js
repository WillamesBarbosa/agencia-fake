function abrirMenu(){
    let menu = document.getElementById('menuMobile');
    let classeMenu = menu.getAttribute('class');
    let body = document.querySelector('.body');

    if(classeMenu == "menu"){
        menu.classList.add('Clicado');
        body.style.overflow = 'hidden';
        window.scrollTo(0, 0);

    }else{
        menu.classList.remove('Clicado');
        body.style.overflow = 'visible';
    }
}