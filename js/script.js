function abrirMenu(){
    let menu = document.getElementById('menuMobile');
    let classeMenu = menu.getAttribute('class');

    if(classeMenu == "menu"){
        menu.classList.add('Clicado');
    }else{
        menu.classList.remove('Clicado');
    }
}