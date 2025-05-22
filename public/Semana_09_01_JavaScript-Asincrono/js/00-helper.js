//Esta función quita todos los nodos hijo del elemento pasado por parámetro.
export function borrarHijos(elemento){
    while (elemento.firstChild) {
        elemento.firstChild.remove();
    }
}