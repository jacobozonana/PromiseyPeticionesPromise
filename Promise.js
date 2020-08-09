// decirme si un numero es menor que 5 o no

const numeroMenorqueCinco = new Promise((resolve, reject) =>{
    const RANDOM_NUMBER = Math.floor(Math.random()*10)
    setTimeout(
        ()=>{
            if(RANDOM_NUMBER>5){
                resolve (RANDOM_NUMBER)
                
            }else if(RANDOM_NUMBER<5){
                reject (new Error(`El  umero es menor a 5`))
            }
        }, 2000
        )
})

numeroMenorqueCinco
.then(resolve =>console.log(resolve))
.catch(error =>console.log(error))