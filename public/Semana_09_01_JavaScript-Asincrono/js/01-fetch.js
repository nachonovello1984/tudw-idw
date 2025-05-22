import { borrarHijos } from "./00-helper.js";

function actualizarTabla(jugadores) {
    const resultados = document.getElementsByTagName("tbody")[0];
    borrarHijos(resultados);

    jugadores.forEach(jugador => {
        const tdDorsal = document.createElement("td");
        tdDorsal.textContent = jugador.dorsal;
        const tdNacionalidad = document.createElement("td");
        tdNacionalidad.textContent = jugador.nacionalidad;
        const tdNombre = document.createElement("td");
        tdNombre.textContent = jugador.nombre;
        const tdEdad = document.createElement("td");
        tdEdad.textContent = jugador.edad;

        const tr = document.createElement("tr");
        tr.appendChild(tdDorsal);
        tr.appendChild(tdNacionalidad);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEdad);

        resultados.appendChild(tr);
    });
}

function ocultarError() {
    let elementError = document.getElementById("error");
    elementError.style.display = "none";
}

function actualizarError(error) {
    const elementError = document.getElementById("error");
    elementError.textContent = error;
    elementError.style.display = "block";
    elementError.style.color = "red";
    elementError.style.borderColor = "red";
    elementError.style.backgroundColor = "pink";
    elementError.style.padding = "1rem";
    elementError.style.marginBottom = "1rem";
    elementError.style.borderRadius = "8px";
    elementError.style.fontFamily = "Arial, Sans-serif";
}

document.getElementById("llenar-tabla").addEventListener("click", () => {
    fetch("/datos/jugadores2.json")
        .then(response => {
            if (!response.ok) {
                throw Error("Fallo al intentar consultar");
            }
            
            response.json()
                .then((datos) => {
                    ocultarError();
                    actualizarTabla(datos);
                })
                .catch(error => actualizarError(error));
            }
        ).catch(error => actualizarError(error));
    });