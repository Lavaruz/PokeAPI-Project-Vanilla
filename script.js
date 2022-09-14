// const body = document.querySelector('body')

async function fetchAPI(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
    if(response.ok){
        console.log('SUCCESS FETCH');
    }
    return response.json()
}


const pokemonName = fetchAPI().then(data => {
    const newH3 = document.createElement('h3')
    newH3.innerHTML = data.name
    const newImg = document.createElement('img')
    newImg.src = data.sprites.front_shiny

    document.body.appendChild(newH3)
    document.body.appendChild(newImg)
})
// const pokemonFront = fetchAPI().then(data => data.sprites.front_shiny)

// console.log(pokemonName);

