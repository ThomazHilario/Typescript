// Função ao carregar a página
function loadPage(){

    // fazendo multiplas requisições
    Promise.all([fetch(`https://kitsu.io/api/edge/anime?filter[text]=jujutsukaisen`),fetch(`https://kitsu.io/api/edge/anime?filter[text]=HunterxHunter`),fetch(`https://kitsu.io/api/edge/anime?filter[text]=digimon`),fetch(`https://kitsu.io/api/edge/anime?filter[text]=pokemon`),fetch(`https://kitsu.io/api/edge/anime?filter[text]=horimiya`),fetch(`https://kitsu.io/api/edge/anime?filter[text]=bungou`),fetch(`https://kitsu.io/api/edge/anime?filter[text]=fullmetal`)])
    .then( (response) =>  {

        // Percorrendo cada response
        response.forEach(async(anime )=>  {

            //  transformando cada response em objeto
            let data = await anime.json()

            //  criando uma variável que será um elemento li
            let img = document.createElement('img') as HTMLImageElement

            // Adicionando o caminho da imagem
            img.src = data.data[0].attributes.posterImage.small

            // Adicionando a class a imagem
            img.setAttribute('class','w-40 m-1 rounded-sm')

            // Capturando container
            let container = document.getElementById('container') as HTMLElement

            // Adicionando cada variável ao container
            container.append(img)

            // capturando os cards do container
            let cards = document.querySelectorAll('img')

            //  criando um array para armazenar elementos html
            let myList:HTMLElement[] = []

            // Percorrendo cada card
            cards.forEach((card,idx) => {

                // Jogando cada tag card para dentro do array
                myList.push(card)

                // Adicionando evento aos cards
                card.addEventListener('click',function(){

                    // Aumentando a largura do card
                    card.style.width = '290px'

                    // Adicionando transição
                    card.style.transition = '0.7s'

                    // Percorrendo cada elemento do array
                    myList.map((element,idx2) => {

                        // Condição caso o card no qual eu esteja clicando não for igual a ele
                        if(idx2 !== idx){

                            // Diminuindo a largura
                            element.style.width = '120px'
                        }
                    })
                })
            })
        })
    })
}


