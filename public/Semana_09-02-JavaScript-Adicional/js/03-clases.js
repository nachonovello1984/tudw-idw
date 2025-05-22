class Jugador {
    constructor(dorsal, nacionalidad, nombre, edad) {
        this.dorsal = dorsal;
        this.nacionalidad = nacionalidad;
        this.nombre = nombre;
        this.edad = edad;
    }

    makeHTML() {
        return `<tr><td>${this.dorsal}</td><td>${this.nacionalidad}</td><td>${this.nombre}</td><td>${this.edad} años</td></tr>`;
    }

    makeHTMLElement() {
        const tr = document.createElement("tr");
        const tdDorsal = document.createElement("td");
        tdDorsal.style.textAlign = "center";
        tdDorsal.textContent = this.dorsal;
        tr.appendChild(tdDorsal);

        const tdNacionalidad = document.createElement("td");
        tdNacionalidad.textContent = this.nacionalidad;
        tr.appendChild(tdNacionalidad);

        const tdNombre = document.createElement("td");
        tdNombre.textContent = this.nombre;
        tr.appendChild(tdNombre);

        const tdEdad = document.createElement("td");
        tdEdad.textContent = `${this.edad} años`;
        tr.appendChild(tdEdad);

        return tr;
    }
}

const jugador1 = new Jugador(1, "POR", "Ederson", 29);
const jugador2 = new Jugador(5, "DEF", "John Stones", 28);
const jugador3 = new Jugador(3, "DEF", "Rúben Dias", 29);
const jugador4 = new Jugador(5, "DEF", "Aymeric Laporte", 28);
const jugador5 = new Jugador(6, "DEF", "Nathan Aké", 28);
const jugador6 = new Jugador(16, "MED", "Rodri", 26);
const jugador7 = new Jugador(8, "MED", "İlkay Gündoğan", 32);
const jugador8 = new Jugador(17, "MED", "Kevin De Bruyne", 31);
const jugador9 = new Jugador(9, "DEL", "Erling Haaland", 22);
const jugador10 = new Jugador(18, "DEL", "Julián Álvarez", 23);
const jugador11 = new Jugador(2, "DEF", "Kyle Walker", 32);
const jugador12 = new Jugador(4, "DEF", "Kalvin Phillips", 27);
const jugador13 = new Jugador(10, "DEL", "Jack Grealish", 27);
const jugador14 = new Jugador(18, "POR", "Stefan Ortega", 30);
const jugador15 = new Jugador(20, "MED", "Bernardo Silva", 30);
const jugador16 = new Jugador(21, "DEF", "Sergio Gómez", 22);
const jugador17 = new Jugador(25, "DEF", "Manuel Akanji", 27);
const jugador18 = new Jugador(26, "DEL", "Riyad Mahrez", 32);
const jugador19 = new Jugador(32, "MED", "Máximo Perrone", 20);

const datos = [jugador1,
    jugador2,
    jugador3,
    jugador4,
    jugador5,
    jugador6,
    jugador7,
    jugador8,
    jugador9,
    jugador10,
    jugador11,
    jugador12,
    jugador13,
    jugador14,
    jugador15,
    jugador16,
    jugador17,
    jugador18,
    jugador19];

document.getElementById("llenar-tabla").addEventListener("click", () => {
    const tBody = document.getElementsByTagName("tbody")[0];
    borrarHijos(tBody);
    datos.forEach(j => (tBody.appendChild(j.makeHTMLElement())));
});