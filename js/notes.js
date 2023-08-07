let notesMenuItems = document.querySelectorAll('#notes-menu li');
let notesContainers = document.querySelectorAll('#notes-container .note-info');

// Función para establecer una nota activa y desactivar las demás notas
function setActiveNote(i) {
    // Itera sobre todos los elementos <li> en "notesMenuItems" y les quita la clase "active-li"
    notesMenuItems.forEach(e => {
        e.classList.remove('active-li');
    })

    // Pinta el elemento <li> activo (al que se le hizo click o seleccionó con la tecla Enter)
    notesMenuItems[i].classList.add('active-li');

    // Itera sobre todos los elementos con clase "note-info" y les quita la clase "active-note"
    notesContainers.forEach(container => {
        container.classList.remove('active-note');
    });

    // Agrega la clase "active-note" a la nota con el índice "i"
    notesContainers[i].classList.add('active-note');
}

for (let i = 0; i < notesMenuItems.length; i++) {
    const li = notesMenuItems[i];

    // Establece el atributo "tabindex" en 0 a cada <li>. (Ahora se pueden seleccionar mediante tabulación - Mejora la accesibilidad)
    li.setAttribute('tabindex', 0);

    // Establecer la nota activa al hacer click
    li.addEventListener('click', () => {
        setActiveNote(i);
    });

    // Establecer la nota activa al presionar la tecla "Enter" (gracias al "tabindex" de arriba)
    li.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            setActiveNote(i);
        }
    });
}
