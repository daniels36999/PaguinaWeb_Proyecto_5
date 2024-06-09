document.addEventListener('DOMContentLoaded',function(){
    
    eventListeners();
    darkMode();
    agregarFooter();

});


//MENU DE PASTEL
function eventListeners(){

    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click',navegacioResposive);
}

function navegacioResposive(){
    const navegacion = document.querySelector('.navegacion')

    //METODO1
    if (navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    }
    else{
        navegacion.classList.add('mostrar');
    }

    //METODO 2
    //navegacion.classList.toggle('mostrar');
}

//DARK MODE
function darkMode(){

    //SIRVE PARA CONTROLAR EL DARK MODE ANIVEL DE NAVEGADOR
    const seleccionaDark = window.matchMedia('(prefers-color-scheme:dark)');
    let modoOscuroActivado = localStorage.getItem('modoOscuro');


    // if(seleccionaDark.matches){ 
    //     document.body.classList.add('dark-mode');
    // }
    // else{
    //     document.body.classList.remove('dark-mode');
    // }

    if (modoOscuroActivado === 'activado') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    seleccionaDark .addEventListener('change', function() { //AUTOMATIZA
        if(seleccionaDark .matches) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('modoOscuro', 'activado');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('modoOscuro', null);
        }
    });

   //SIRVE PARA CONTROLAR EL DARK MODE ANIVEL DEL BOTON
    // const botonDarkMode = document.querySelector('.dark-mode-boton');
    // botonDarkMode.addEventListener('click', function() {
    //     document.body.classList.toggle('dark-mode');
    // });

    const botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('modoOscuro', null);
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('modoOscuro', 'activado');
        }
    });

}

function agregarFooter() {
    const anio = new Date().getFullYear();

    const p = document.createElement('p');
    p.className = 'copyrigth';

    const texto = document.createTextNode(`Todos los derechos reservados © ${anio} | `);
    p.appendChild(texto);

    const button = document.createElement('button');
    button.textContent = 'Daniels Yautibug';
    button.onclick = () => clicEnlace('https://github.com/daniels36999');
    p.appendChild(button);

    function clicEnlace(url) {
        window.location.href = url;
    }

    document.getElementById('app').appendChild(p);
}