function login(recivedEmail,recivedPassword){
 return new Promise(function(resolve, reject){
     setTimeout(()=>{
         let email = `jacobozonana@gmail.com`
         let password = `hola1234`
         if (recivedEmail == email && recivedPassword == password){
             resolve (
                {
                    mensaje: "Bienvenido usuario", 
                    loggedIn: true
                    
                });
             
         }else {
             reject(new Error(`Tu password o email estan mail Checalo!!`))
         }
     }, 1000);
 } );  
}
// Si esta bien
// let user = login(`jacobozonana@gmail.com`, `hola1234`)

// .then((response)=>console.log(response.mensaje, response.loggedIn))
// .catch((error)=>console.log(error))

// Si hay un error
let user = login(`jacobozonana@hotmail.com`, `hola1234`)

.then((response)=>console.log(response.mensaje, response.loggedIn))
.catch((error)=>console.log(error))


