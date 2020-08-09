const axios = require(`axios`)

function getPokemon(name){
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
    .then((response)=>{
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}
getPokemon('ditto')

