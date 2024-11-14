document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Usuario y contraseña de admin
            const validUsername = 'admin';
            const validPassword = '1234';

            if (username === validUsername && password === validPassword) {
                // Guardar el estado de login en localStorage
                localStorage.setItem('loggedIn', 'true');
                // Redirigir a index.html
                window.location.href = '.../index.html';
            } else {
                // Mostrar mensaje de error
                document.getElementById('error-message').style.display = 'block';
            }
        });
    }
});
