export class Jugador {
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