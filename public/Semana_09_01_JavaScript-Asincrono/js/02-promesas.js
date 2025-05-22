function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

document.getElementById("consultar-promise").addEventListener("click",  () => {
    const promiseObj = new Promise((resolve, reject) => {
        const valor = randomIntFromInterval(0, 99);
        if (valor % 2 == 0)
            resolve(`${valor} es par`);
        else
            reject(`${valor} no es par`);
    });

    promiseObj.then(valor => {
        const p = document.createElement("p");
        p.style.fontSize = "36pt";
        p.style.color = "green";
        p.textContent = valor;

        const article = document.getElementsByTagName("article")[0];
        article.appendChild(p);
    }).catch(mensaje => {
        const p = document.createElement("p");
        p.style.fontSize = "36pt";
        p.style.color = "red";
        p.textContent = mensaje;

        const article = document.getElementsByTagName("article")[0];
        article.appendChild(p);
    });
});
