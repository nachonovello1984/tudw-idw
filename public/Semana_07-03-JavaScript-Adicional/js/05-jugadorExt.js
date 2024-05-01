import { Jugador } from "./05-jugador.js";

export class JugadorExt extends Jugador {
    constructor(dorsal, nacionalidad, nombre, edad, posicion, goles) {
        super(dorsal, nacionalidad, nombre, edad);
        this.posicion = posicion;
        this.goles = goles ?? 0;
    }

    makeHTML() {
        return `<tr>` +
            `<td>${this.dorsal}</td>` +
            `<td>${this.nacionalidad}</td>` +
            `<td>${this.nombre}</td>` +
            `<td>${this.edad} años</td>` +
            `<td>${this.posicion}</td>` +
            `<td>${this.goles}</td>` +
            `</tr>`;
    }

    makeHTMLElement() {
        const tr = super.makeHTMLElement();

        const tdPosicion = document.createElement("td");
        tdPosicion.textContent = this.posicion;
        tr.appendChild(tdPosicion);

        const tdGoles = document.createElement("td");
        tdGoles.style.textAlign = "center";
        tdGoles.textContent = this.goles;
        tr.appendChild(tdGoles);

        return tr;
    }
}