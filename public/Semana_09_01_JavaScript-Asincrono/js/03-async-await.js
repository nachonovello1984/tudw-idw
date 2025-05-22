import { borrarHijos } from "./00-helper.js";

const actualizarTabla = (jugadores) => {
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

const ocultarError = () => {
    let elementError = document.getElementById("error");
    elementError.style.display = "none";
}

const actualizarError = (error) => {
    let elementError = document.getElementById("error");
    elementError.textContent = error;
    elementError.style.display = "block";
    elementError.style.borderColor = "red";
    elementError.style.backgroundColor = "pink";
    elementError.style.padding = "1rem";
    elementError.style.marginBottom = "1rem";
    elementError.style.borderRadius = "8px";
    elementError.style.fontFamily = "Arial, Sans-serif";
}

document.getElementById("llenar-tabla-normal").addEventListener("click", () => {
    console.log("Asíncrono");
    console.log("antes...");

    fetch("/datos/jugadores.json").then(response => {
        if (!response.ok) {
            actualizarError("Error al consultar");
            return;
        }
        response.json()
            .then((datos) => {
                console.log("consulté");
                ocultarError();
                actualizarTabla(datos)
                console.log("terminé DOM");
            })
            .catch(error => actualizarError(error));
    }).catch(error => actualizarError(error));
    console.log("después...");
});

document.getElementById("simple-async-await").addEventListener("click", async () => {
    try{
        const response = await fetch("/datos/jugadores.json");
        if (!response.ok){
            actualizarError("Error al consultar");
            return;
        }

        const data = await response.json();

        ocultarError();
        actualizarTabla(data);
    } catch (e){
        actualizarError(e);
    }
});

document.getElementById("llenar-tabla-async-await").addEventListener("click", async () => {
    console.log("Async & Await");
    console.log("antes...");

    let promise = new Promise((resolve, reject) => {
        setTimeout(async () => {
            const response = await fetch("/datos/jugadores.json");
            if (!response.ok) {
                reject("Error al consultar");
                return;
            }
            const datos = await response.json();
            console.log("consulté");
            ocultarError();
            actualizarTabla(datos)
            console.log("terminé DOM");
            resolve("terminé!");
        }, 1000)
    });

    let resultado = await promise; 

    console.log(resultado);

    console.log("después...");
});

document.getElementById("vaciar-tabla").addEventListener("click", () => {
    const tBody = document.getElementsByTagName("tbody");
    borrarHijos(tBody[0]);
});