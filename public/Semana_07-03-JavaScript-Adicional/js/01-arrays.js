const paintings = [
    { title: "Girl with a Pearl Earring", artist: "Vermeer", year: 1665 },
    { title: "Artist Holding a Thistle", artist: "Durer", year: 1493 },
    { title: "Wheatfield with Crows", artist: "Van Gogh", year: 1890 },
    { title: "Burial at Ornans", artist: "Courbet", year: 1849 },
    { title: "Sunflowers", artist: "Van Gogh", year: 1889 }
];

//For-Each
document.getElementById("for-each").addEventListener("click", () => {
    const resultados = document.getElementById("resultados");
    const h3 = document.createElement("h3");
    h3.textContent = "Resultados for-each";

    const ul = document.createElement("ul");
    paintings.forEach((p) => {
        const li = document.createElement("li");
        li.textContent = `${p.title} por ${p.artist}`;
        ul.appendChild(li);
    });

    borrarHijos(resultados);
    resultados.appendChild(h3);
    resultados.appendChild(ul);
});

//Find
document.getElementById("find").addEventListener("click", () => {
    const resultados = document.getElementById("resultados");
    const h3 = document.createElement("h3");
    h3.textContent = "Resultados find";

    const ul = document.createElement("ul");

    //find
    const pinturaVanGogh = paintings.find(p => p.artist === 'Van Gogh');

    const li = document.createElement("li");
    li.textContent = `${pinturaVanGogh.title} por ${pinturaVanGogh.artist}`;
    ul.appendChild(li);

    borrarHijos(resultados);
    resultados.appendChild(h3);
    resultados.appendChild(ul);
});

//Filter
document.getElementById("filter").addEventListener("click", () => {
    const resultados = document.getElementById("resultados");
    const h3 = document.createElement("h3");
    h3.textContent = "Resultados filter";

    const ul = document.createElement("ul");

    //filter
    const pinturasVanGogh = paintings.filter(p => p.artist === 'Van Gogh');

    for (let p of pinturasVanGogh) {
        const li = document.createElement("li");
        li.textContent = `${p.title} por ${p.artist}`;
        ul.appendChild(li);
    }

    borrarHijos(resultados);
    resultados.appendChild(h3);
    resultados.appendChild(ul);
});

//Map
document.getElementById("map").addEventListener("click", () => {
    const resultados = document.getElementById("resultados");
    const h3 = document.createElement("h3");
    h3.textContent = "Resultados map";

    const ul = document.createElement("ul");

    const pinturasVanGogh = paintings.map(p => {
        const li = document.createElement("li");
        li.style.color = "purple";
        li.textContent = `${p.title} por ${p.artist}`;
        return li;
    });

    pinturasVanGogh.forEach(li => { 
        
        ul.appendChild(li); 
    });

    borrarHijos(resultados);
    resultados.appendChild(h3);
    resultados.appendChild(ul);
});

//Reduce
document.getElementById("reduce").addEventListener("click", () => {
    const resultados = document.getElementById("resultados");
    const h3 = document.createElement("h3");
    h3.textContent = "Resultados reduce";

    const ul = document.createElement("ul");
    const li = document.createElement("li");

    let year = paintings.reduce((acumulado, actual) => acumulado + actual.year, 0) / paintings.length;

    year = Number(year).toFixed(0);

    li.textContent = `Año promedio de las pinturas: ${year}`;
    ul.appendChild(li);

    borrarHijos(resultados);
    resultados.appendChild(h3);
    resultados.appendChild(ul);
});

//Sort
document.getElementById("sort").addEventListener("click", () => {
    const resultados = document.getElementById("resultados");
    const h3 = document.createElement("h3");
    h3.textContent = "Resultados sort";

    const ul = document.createElement("ul");

    const pinturasOrdenadas = paintings.sort((a, b) => {
        if (a.year < b.year) {
            return -1;
        } else {
            if (a.year > b.year) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    const pinturas = pinturasOrdenadas.map(p => {
        const li = document.createElement("li");
        li.textContent = `(${p.year}) ${p.title} por ${p.artist}`;
        return li;
    });

    pinturas.forEach(n => ul.appendChild(n));

    borrarHijos(resultados);
    resultados.appendChild(h3);
    resultados.appendChild(ul);
});