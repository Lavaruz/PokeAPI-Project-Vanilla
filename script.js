const pokemon_API = 'https://pokeapi.co/api/v2/pokemon/'
const pokemonData = document.querySelector('.pokemon-data')

async function fetchAPI(API){
    const response = await fetch(API)
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json()
}

fetchAPI(pokemon_API).then(data => {
    const pokemonName = data.results
    pokemonName.forEach(element => {
        fetchAPI(element.url)
            .then(e => {
                console.log(e);
                // CREATE DIV FOR ITEM
                const pokemonItem = document.createElement('div')
                pokemonItem.classList.add('pokemon-item')
                // CREATE H3
                const newH3 = document.createElement('h3')
                newH3.innerHTML = e.name
                const newImg = document.createElement('img')
                newImg.src = e.sprites.front_shiny
        
                // APPENDING
                pokemonItem.appendChild(newH3)
                pokemonItem.appendChild(newImg)
                pokemonData.appendChild(pokemonItem)
            })
    });
})

// const pokemonName = fetchAPI().then(data => {


//     document.body.appendChild(newImg)
// })
// const pokemonFront = fetchAPI().then(data => data.sprites.front_shiny)

// console.log(pokemonName);

