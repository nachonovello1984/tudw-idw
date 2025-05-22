import * as helper from "./05-helper.js";
import { JugadorExt } from "./05-jugadorExt.js";

const datos = [
    new JugadorExt(1, "POR", "Ederson", 29, "ARQUERO", 0),
    new JugadorExt(5, "DEF", "John Stones", 28, "DEFENSOR", 2),
    new JugadorExt(3, "DEF", "Rúben Dias", 29, "DEFENSOR", 0),
    new JugadorExt(5, "DEF", "Aymeric Laporte", 28, "DEFENSOR", 0),
    new JugadorExt(6, "DEF", "Nathan Aké", 28, "DEFENSOR", 1),
    new JugadorExt(16, "MED", "Rodri", 26, "MEDIOCAMPISTA", 2),
    new JugadorExt(8, "MED", "İlkay Gündoğan", 32, "MEDIOCAMPISTA", 4),
    new JugadorExt(17, "MED", "Kevin De Bruyne", 31, "MEDIOCAMPISTA", 7),
    new JugadorExt(9, "DEL", "Erling Haaland", 22, "DELANTERO", 35),
    new JugadorExt(18, "DEL", "Julián Álvarez", 23, "DELANTERO", 8),
    new JugadorExt(2, "DEF", "Kyle Walker", 32, "DEFENSOR", 0),
    new JugadorExt(4, "DEF", "Kalvin Phillips", 27, "MEDIOCAMPISTA", 0),
    new JugadorExt(10, "DEL", "Jack Grealish", 27, "DELANTERO", 5),
    new JugadorExt(18, "POR", "Stefan Ortega", 30, "ARQUERO", 0),
    new JugadorExt(20, "MED", "Bernardo Silva", 30, "DEFENSOR", 4),
    new JugadorExt(21, "DEF", "Sergio Gómez", 22, "DEFENSOR", 0),
    new JugadorExt(25, "DEF", "Manuel Akanji", 27, "DEFENSOR", 0),
    new JugadorExt(26, "DEL", "Riyad Mahrez", 32, "DELANTERO", 5),
    new JugadorExt(32, "MED", "Máximo Perrone", 20, "MEDIOCAMPISTA", 0)];

document.getElementById("llenar-tabla").addEventListener("click", () => {
    const tBody = document.getElementsByTagName("tbody")[0];
    helper.borrarHijos(tBody);
    datos.forEach(j => (tBody.appendChild(j.makeHTMLElement())));
});