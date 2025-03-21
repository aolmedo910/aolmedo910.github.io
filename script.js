function mostrarAlerta() {
    alert("Gracias por clickear el botón");
}

// Función para mostrar u ocultar la barra lateral
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const content = document.querySelector(".content");
    
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        overlay.style.display = "none";
        content.style.marginLeft = "0"; // Vuelve el contenido a su lugar
    } else {
        sidebar.style.width = "250px"; // Despliega la barra lateral
        overlay.style.display = "block"; // Muestra el fondo oscuro
        content.style.marginLeft = "250px"; // Mueve el contenido a la derecha
    }
}

// Función para ocultar la barra lateral cuando se hace clic en el overlay
document.getElementById("overlay").onclick = function() {
    toggleSidebar();
};
