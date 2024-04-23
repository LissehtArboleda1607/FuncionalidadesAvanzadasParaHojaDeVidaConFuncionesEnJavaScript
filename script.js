console.log("Hoja de Vida Interactiva Cargada");

// Carga inicial de certificaciones
const certificaciones = ["Curso A", "Curso B", "Taller C", "Seminario D"];
window.onload = () => {
    mostrarCertificaciones();
};

const mostrarCertificaciones = () => {
    const ul = document.getElementById('listaCertificaciones');
    certificaciones.forEach(certificacion => {
        const li = document.createElement('li');
        li.textContent = certificacion;
        ul.appendChild(li);
    });
};

// Mostrar proyectos anteriores
document.getElementById('verProyectosAnteriores').addEventListener('click', () => {
    const numProyectos = parseInt(prompt("¿Cuántos proyectos deseas ver?"));
    if (!isNaN(numProyectos) && numProyectos > 0) {
        mostrarProyectosAnteriores(numProyectos);
    } else {
        alert("Por favor, ingresa un número válido de proyectos.");
    }
});

const proyectosAnteriores = ["Proyecto 1", "Proyecto 2", "Proyecto 3", "Proyecto 4", "Proyecto 5"];
const mostrarProyectosAnteriores = (numProyectos) => {
    const ul = document.getElementById('proyectosAnteriores');
    ul.innerHTML = '';
    proyectosAnteriores.slice(0, numProyectos).forEach(proyecto => {
        const li = document.createElement('li');
        li.textContent = proyecto;
        ul.appendChild(li);
    });
};

// Añadir habilidades
document.getElementById('addSkill').addEventListener('click', () => {
    const habilidad = prompt("Ingrese la nueva habilidad:");
    const nivel = prompt("Ingrese el nivel de dominio:");
    if (habilidad && nivel) {
        const tbody = document.getElementById('listaHabilidades');
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${habilidad}</td><td>${nivel}</td>`;
        tbody.appendChild(tr);
    } else {
        alert("Por favor, ingrese información válida para la habilidad y el nivel.");
    }
});