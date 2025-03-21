// Función para mostrar u ocultar la barra lateral
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const content = document.querySelector(".content");
    const menuToggle = document.getElementById("menu-toggle");
    
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        overlay.style.display = "none";
        content.style.marginLeft = "0"; // Vuelve el contenido a su lugar
        menuToggle.classList.remove("active"); // Desactiva el icono de menú
    } else {
        sidebar.style.width = "250px"; // Despliega la barra lateral
        overlay.style.display = "block"; // Muestra el fondo oscuro
        content.style.marginLeft = "250px"; // Mueve el contenido a la derecha
        menuToggle.classList.add("active"); // Activa el icono de menú
    }
}

// Función para ocultar la barra lateral cuando se hace clic en el overlay
document.getElementById("overlay").onclick = function() {
    toggleSidebar();
};

// Event listener para el menú hamburguesa
document.getElementById("menu-toggle").onclick = function() {
    toggleSidebar();
};
