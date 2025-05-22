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

function buscarJugadores() {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', '/datos/jugadores.json', true);

      xhr.onload = function () {
        if (xhr.status === 200) {
          const datos = JSON.parse(xhr.responseText);
          ocultarError();
          actualizarTabla(datos);
        } else {
          actualizarError("Error en la solicitud");
        }
      };

      xhr.onerror = function () {
        actualizarError("Error de red en la solicitud");
      };

      xhr.send();
    }

document.getElementById("llenar-tabla")
.addEventListener("click", buscarJugadores);
    