function abrirMenu(){
    let menu = document.getElementById('menuMobile');
    let classeMenu = menu.getAttribute('class');
    let main = document.querySelector('.main');
    let section = document.querySelector('.section');
    let footer = document.querySelector('.footer');

    if(classeMenu == "menu"){
        menu.classList.add('Clicado');
        main.style.display = 'none';
        section.style.display = 'none';
        footer.style.display = 'none';

    }else{
        menu.classList.remove('Clicado');
        main.style.display = 'block';
        section.style.display = 'block';
        footer.style.display = 'block';
    }
}