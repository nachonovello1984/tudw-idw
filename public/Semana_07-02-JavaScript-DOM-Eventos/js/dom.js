function parentezco() {
    let resultadosElement = document.getElementById('resultadoDocument');

    const ul = document.getElementById("ulEjemplos");
    //let nodoActual = ul.firstChild;
    let nodoActual = ul.firstElementChild;

    resultadosElement.innerHTML = `Primer hijo de ul: ${nodoActual.nodeName}. id: ${nodoActual.childNodes[0]?.id}. Hijos: ${nodoActual.childNodes.length??0} <br/>`;

    //nodoActual = nodoActual.nextSibling;
    nodoActual = nodoActual.nextElementSibling;

    while (nodoActual != null){
        resultadosElement.innerHTML += `>> Siguiente hijo de ul: ${nodoActual.nodeName}. id: ${nodoActual.childNodes[0]?.id}. Hijos: ${nodoActual.childNodes.length??0} <br/>`;
        //nodoActual = nodoActual.nextSibling;
        nodoActual = nodoActual.nextElementSibling;
    }
        
}

function tiposNodos(){
    let resultadosElement = document.getElementById('resultadoDocument');
    resultadosElement.textContent = 'document es tipo: ' + document.nodeType;
    
    let resultadosBody = document.getElementById('resultadoBody');
    resultadosBody.textContent = 'body es tipo: ' + document.getElementsByTagName('body')[0].nodeType;
    
    let resultadosA = document.getElementById('resultadoA');
    let aElements = document.getElementsByTagName('a');
    for(let i = 0; i < aElements.length; i++){
        resultadosA.innerHTML = resultadosA.innerHTML + 'a(' + i + ') es tipo: ' + aElements[i].nodeType;
        resultadosA.innerHTML = resultadosA.innerHTML + '<br/>';
    }
}

function propiedadesNodos(){
    let resultadosA = document.getElementById('resultadosPropiedadesA');
    let aElements = document.getElementsByTagName('a');
    for(let i = 0; i < aElements.length; i++){
        resultadosA.innerHTML = resultadosA.innerHTML + 'a(' + i + ') nombre: ' + aElements[i].nodeName +', tipo: ' + aElements[i].nodeType + ', value: ' + aElements[i].childNodes[0].nodeValue;
        resultadosA.innerHTML = resultadosA.innerHTML + '<br/>';
    }
}

function selectores(){
    let resultados = document.getElementById('resultadosSelectores');
    let elements = document.getElementsByClassName('resultados');
    
    resultados.innerHTML = 'Resultados con getElementsByClassName()<br/>';
    
    for(let i = 0; i < elements.length; i++){
        resultados.innerHTML = resultados.innerHTML + 'elements(' + i + ') nombre: ' + elements[i].nodeName +', tipo: ' + elements[i].nodeType;
        resultados.innerHTML = resultados.innerHTML + '<br/>';
    }

    resultados.innerHTML = resultados.innerHTML + '<br/>Resultados con querySelectorAll()<br/>';
    
    elements = document.querySelectorAll('section');
    for(let i = 0; i < elements.length; i++){
        resultados.innerHTML = resultados.innerHTML + 'elements(' + i + ') nombre: ' + elements[i].nodeName +', tipo: ' + elements[i].nodeType;
        resultados.innerHTML = resultados.innerHTML + '<br/>';
    }
}

function creacion(){
    const resultados = document.getElementById('resultadosCreacion');    
    
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('cuadrado');
    nuevoDiv.classList.add('verde');
    
    resultados.appendChild(nuevoDiv);

    let p = document.createElement("p");
        
    let nuevoText = document.createTextNode("Esto es una prueba");
    p.appendChild(nuevoText);

    resultados.appendChild(p);

    let otroDiv1 = nuevoDiv.cloneNode();
    otroDiv1.classList.remove('verde');
    otroDiv1.classList.add('rojo');
    
    resultados.insertBefore(otroDiv1, nuevoDiv);
    
    let otroDiv2 = nuevoDiv.cloneNode();
    otroDiv2.classList.remove('verde');
    otroDiv2.style.backgroundColor = "magenta";
    
    resultados.appendChild(otroDiv2);

}


