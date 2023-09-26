// Configurando o dark Mode

const body = document.querySelector('body') as HTMLElement
const darkMode = document.getElementById('darkModeTag') as HTMLElement


darkMode.addEventListener('click',function(){
    // adicionando classe toggle ao body
    body.classList.toggle('dark')

    // logica caso a classe seja retirada
    if(body.className == 'dark'){
        darkMode.setAttribute('class','bi bi-moon-stars')
    } else{
        darkMode.setAttribute('class','bi bi-sun')
    }

    
    loadBodyColor()
})

// Salvando o background na localStorage
function loadBodyColor(){
    localStorage.setItem('background',JSON.stringify(body.className))
}

// Pegando o background da localStorage
function loadPage(){ 
    if(localStorage.getItem('background') !== null){
        let isDark:string = localStorage.getItem('background') as string
        isDark = JSON.parse(isDark)
        

        if(isDark == 'dark'){
            body.classList.add('dark')
            darkMode.setAttribute('class','bi bi-moon-stars')
        }
    }    
}