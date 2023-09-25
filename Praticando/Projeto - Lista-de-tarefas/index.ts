// input
const inputText = document.getElementById('input') as HTMLInputElement

// button
const buttonClick = document.getElementById('click') as HTMLButtonElement

// ul
const ul = document.querySelector('#container ul') as HTMLUListElement

// array para armazenar os valores do input
let myList:string[] = []

buttonClick.addEventListener('click',function(e){
    // cancelando o formulario
    e.preventDefault()
    
    // Condição se o input não for vazio
    if(inputText.value !== ''){

        // Alterando o display do ul para block
        ul.style.display = 'block'

        // criando um elemento li
        let li = document.createElement('li')

        // Modifica o conteúdo interno do elemento criando (li)
        li.innerHTML = `<p>${inputText.value}</p> <button id="deleteButton" class="bg-red-500 rounded-sm w-20">Delete</button>`

        // Adicionando uma class ao li
        li.setAttribute('class','border-2 border-black rounded-sm pl-1')

        // Jogando o texto no input dentro do array myList
        myList.push(inputText.value)

        // Jogando o li dentro do ul
        ul.append(li)

        // Função para salvar o array myList na localStorage
        salvandoItens()

        // função para deletar o item
        deleteItems(li)

        // limpando o input
        inputText.value = ''
    }
})

// Listando tarefas
function loadPage(){

    // Condição caso a local storage não retorne null
    if(localStorage.getItem('lista') !== null){

        // variável que pegará minha lista da local storage em texto string
        let listaLocalStorage:string = localStorage.getItem('lista') as string

        // myList irá receber minha a lista da local storage convertida em um array
        myList = JSON.parse(listaLocalStorage)

        // percorrendo cada elemento do myList
        myList.map(li => {

            // Criando um elemento li
            let liLocalStorage = document.createElement('li')

            // Definindo o seu conteúdo interno HTML
            liLocalStorage.innerHTML = `<p>${li}</p> <button id="deleteButton" class="bg-red-500 rounded-sm w-20">Delete</button>`

            // Definndo uma class para o elemento li
            liLocalStorage.setAttribute('class','border-2 border-black rounded-sm pl-1')

            // Jogando o li dentro do ul
            ul.append(liLocalStorage)

            // função para deletar o item
            deleteItems(liLocalStorage)
        })
    }

    // condição para mudar o display
    if(myList.length > 0 ){
        // Alterando o display do ul para block
        ul.style.display = 'block'
    }
}

// Salvando minha lista na local storage
function salvandoItens(){
    
    // Salvando o meu array na local storage
    localStorage.setItem('lista',JSON.stringify(myList))
}

// Função para deletar os itens
function deleteItems(li:HTMLLIElement){

    // Capturando o botão dentro do li
    let button = li.lastElementChild

    // Adicionando Evento ao botão
    button?.addEventListener('click',function(){

        // Capturando o texto da tag <p>
        let text:string = button?.parentElement?.firstElementChild?.textContent as string

        // Pegando o index do elemento no myList
        let elementIndex = myList.indexOf(text)

        // Removendo o elemento específico do myList
        myList.splice(elementIndex,1)

        // Removendo o li
        li.remove()

        // Salvando a minha nova lista na local storage
        salvandoItens()

        // Condição para alterar o display, caso não tenho itens na lista
        if(ul.children.length == 0){
            ul.style.display = 'none'
        }
    })
}