//Esta función quita todos los nodos hijo del elemento pasado por parámetro.
function borrarHijos(elemento){
    while (elemento.firstChild) {
        elemento.firstChild.remove();
    }
}