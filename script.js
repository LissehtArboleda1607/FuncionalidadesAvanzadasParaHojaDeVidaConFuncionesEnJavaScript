console.log("Hoja de Vida Interactiva Cargada");
document.getElementById('addSkill').addEventListener('click', function() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList'); // Suponiendo que tienes un <ul id="skillsList"> para tus habilidades
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
});
