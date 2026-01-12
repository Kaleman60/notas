function log(fn){
    console.log("----------------")
    console.log("has ejecutado: ") 
    console.log(fn.toString())
    console.log("Resultado:")
    console.log(fn())
}

function suma (a, b){
    return a + b
}

log(() => suma(1, 3))