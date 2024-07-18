// Função para validar o formulário
function validateForm() {
    let isValid = true;

    // Validação do campo nome
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('name-error');
    if (name.trim() === '') {
        nameError.textContent = 'Nome é obrigatório';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Validação do campo email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Email inválido';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    return isValid;
}

// Evento de envio do formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            if (!validateForm()) {
                event.preventDefault();
            }
        });
    }

    // Recuperar dados do formulário na página de resultados
    const resultName = document.getElementById('result-name');
    const resultEmail = document.getElementById('result-email');
    if (resultName && resultEmail) {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        const email = urlParams.get('email');
        resultName.textContent = name;
        resultEmail.textContent = email;
    }
});
