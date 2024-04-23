console.log("Hoja de Vida Interactiva Cargada");

// Carga inicial de certificaciones
const certificaciones = ["Curso A", "Curso B", "Taller C", "Seminario D"];

function mostrarCertificaciones() {
    let ul = document.getElementById('listaCertificaciones');
    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}

// Mostrar proyectos anteriores
document.getElementById('verProyectosAnteriores').addEventListener('click', function() {
    let numProyectos = parseInt(prompt("¿Cuántos proyectos deseas ver?"));
    if (!isNaN(numProyectos) && numProyectos > 0) {
        mostrarProyectosAnteriores(numProyectos);
    } else {
        alert("Por favor, ingresa un número válido de proyectos.");
    }
});

const proyectosAnteriores = ["Proyecto 1", "Proyecto 2", "Proyecto 3", "Proyecto 4", "Proyecto 5"];

function mostrarProyectosAnteriores(numProyectos) {
    let ul = document.getElementById('proyectosAnteriores');
    ul.innerHTML = '';
    for (let i = 0; i < numProyectos && i < proyectosAnteriores.length; i++) {
        let li = document.createElement('li');
        li.textContent = proyectosAnteriores[i];
        ul.appendChild(li);
    }
}

// Añadir habilidades
document.getElementById('addSkill').addEventListener('click', function() {
    let habilidad = prompt("Ingrese la nueva habilidad:");
    let nivel = prompt("Ingrese el nivel de dominio:");

    if (habilidad && nivel) {
        let tbody = document.getElementById('listaHabilidades');
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${habilidad}</td><td>${nivel}</td>`;
        tbody.appendChild(tr);
    } else {
        alert("Por favor, ingrese información válida para la habilidad y el nivel.");
    }
});

window.onload = function() {
    mostrarCertificaciones();
};