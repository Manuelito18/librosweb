// Funcionalidad extra: Contador de libros agregados al carrito

// Creamos un contador y lo mostramos en el nav
document.addEventListener('DOMContentLoaded', function() {
    let contador = 0;

    // Crear el icono del carrito y el contador
    const nav = document.querySelector('nav');
    const carritoDiv = document.createElement('div');
    carritoDiv.style.marginLeft = '2rem';
    carritoDiv.style.display = 'flex';
    carritoDiv.style.alignItems = 'center';
    carritoDiv.innerHTML = `
        <span style="font-size:1.3rem; margin-right:0.4rem;">🛒</span>
        <span id="cart-count" style="font-weight:bold; color:#4e54c8;">0</span>
    `;
    nav.appendChild(carritoDiv);

    // Al hacer clic en cualquier botón "Comprar", aumenta el contador
    const botones = document.querySelectorAll('.buy-btn');
    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            contador++;
            document.getElementById('cart-count').textContent = contador;
        });
    });
});