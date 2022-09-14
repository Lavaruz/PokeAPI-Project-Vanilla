async function fetchAPI(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-form/1/')
    return response.json()
}

fetchAPI().then(data => console.log(data.name))