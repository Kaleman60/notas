const mainElement = document.querySelector("main")
fetch('https://dummyjson.com/recipes/1')
.then(res => res.json())
.then(data =>{
    console.log(data)
    window.recetas = data;
    console.log(Object.keys(data))
    const nameDisplay = document.createElement("p")
    nameDisplay.textContent = data.name
    mainElement.appendChild(nameDisplay)
    //ingredintes en una lista
    //tiempo de preparacion
    //tiempo de cocinado
    //dificultad
    //calorias
    //instrucciones en una lista
    const listaIngredientes = crearLista(data.Ingredients)
    mainElement.appendChild(listaIngredientes)
});

function crearLista(array){
    console.log(array)
    const ul = document.createElement("ul")
    array.forEach(item => {
        const li = document.createElement("li")
        li.textContent = item;
        ul.appendChild(li)

    })
    return ul
}