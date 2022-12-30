const toDos=["Limpiar", "Leer"]
//toDos.addEventListener("add",(e)=>{console.log(e)})
const borrar=(element)=>{
     console.log(element)
     const indice=toDos.indexOf(element)
     console.log(indice)
     toDos.splice(indice,1)
}
const pintar=()=>{
for(element of toDos){
     document.getElementById('contenedorTareas').innerHTML+=`<div class="edit">
     <p>${element}</p>
     <button class="submitB" onclick="borrar('${element}')">borrar</button>
     
     <button class="submitE">editar</button>
     </div>`
}
}

const create =(e)=>{
e.preventDefault()
}