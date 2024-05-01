function eventosClick(evt) {
    let resultados = document.getElementById('resultadosEventos');

    let textNode1 = document.createTextNode("Tipo: " + evt.type);
    let textNode2 = document.createTextNode("Target: " + evt.target);
    let textNode3 = document.createTextNode("Current Target: " + evt.currentTarget);
    let textNode4 = document.createTextNode("Event Phase: " + evt.eventPhase);
    let textNode5 = document.createTextNode("TimeStamp: " + evt.timeStamp);

    const div1 = document.createElement('div');
    div1.appendChild(textNode1);
    resultados.appendChild(div1);

    const div2 = document.createElement('div');
    div2.appendChild(textNode2);
    resultados.appendChild(div2);

    const div3 = document.createElement('div');
    div3.appendChild(textNode3);
    resultados.appendChild(div3);

    const div4 = document.createElement('div');
    div4.appendChild(textNode4);

    resultados.appendChild(div4);

    const div5 = document.createElement('div');
    div5.appendChild(textNode5);

    resultados.appendChild(div5);
}

const eventosElement = document.getElementById('eventos');
eventosElement.addEventListener('click', eventosClick);

document.getElementById('propagacion').addEventListener("click", function (evt) {
    let resultados = document.getElementById('resultadosEventos');
    resultados.innerHTML += `Recibió el evento propagación <br/>`;
    //evt.stopPropagation(); //Si descomento el evento no se propaga al main
});

document.getElementById('main').addEventListener("click", function (evt) {
    let resultados = document.getElementById('resultadosEventos');
    resultados.innerHTML += `Recibió el evento main<br/>`;
});