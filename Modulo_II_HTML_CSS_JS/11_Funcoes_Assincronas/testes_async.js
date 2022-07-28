async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve("Resolvido! ")
        }, 3000)
})
    
    const resolved = await myPromise
        .then((result) => result +"Passando pelo then. ")
        .then((result) => result + "Agora finalizou.")
        .catch((err) => console.log(err.message))
    
    return resolved
}

resolvePromise()