
/* BRILHA AO SELECIONAR */
function initSelection () {

const input = document.querySelectorAll('input')
const activeClass = 'ativo'


if(input.length) {
    function selection (event) { /* cada evento - clique - ele vai tirar a classe ativo de cada item e dps adicionar no item clicado */
        input.forEach((selecao)=> {
            selecao.classList.remove(activeClass) 
    })
        this.classList.add(activeClass)
    

    }

    input.forEach((item) => {
        item.addEventListener('click', selection) /* para os cliques em cada item realizar a função selection */
    })
    }
    }
initSelection()

/* GIRA O MENU e ABRE OUTRO MENU */

 function initMenuDropDown () {
const menu = document.querySelector('.add-icone')
const menuDropDown = document.querySelector('.menu-dropDown')
const pMenu = document.querySelector('header p')

function dropDown (event){
    this.classList.toggle('menu-ativo')
    menuDropDown.classList.toggle('menu-dropDown-ativo')
    pMenu.classList.toggle('paragrafo-ativo')
}


menu.addEventListener('click',dropDown)

 }

 initMenuDropDown ()


/* DARK MODE */

function initDarkMode () {
const darkModeIcone = document.querySelector('.dark-icone')
const darkMode = document.querySelector('body')
const darkModeHeader = document.querySelector('header')
const darkModeMain= document.querySelector('main')

function handleDarkMode (event) {
    this.classList.toggle('dark-mode-on')
    darkModeHeader.classList.toggle('dark-mode-header-on')
    darkModeMain.classList.toggle('dark-mode-main-on')
    darkMode.classList.toggle("dark-mode-body-on")
}

darkModeIcone.addEventListener('click',handleDarkMode)

}

initDarkMode()

