const axios = require(`axios`)

function getCharacter(id){
    const URL = `https://swapi.dev/api/people/${id}/`
    axios.get(URL)
    .then((response)=>{
        console.log(response.data.name)
    })
    .catch((error)=>{
        console.log(error)
    })
}
getCharacter(1)
getCharacter(2)
getCharacter(3)