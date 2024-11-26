document.getElementById('email-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email-input');
  const message = document.getElementById('message');

  if (emailInput.value.trim() === '') {
    message.textContent = 'Por favor, insira um email válido.';
    message.style.color = 'red';
    message.classList.remove('hidden');
    return;
  }

  try {
    const response = await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailInput.value })
    });

    if (response.ok) {
      message.textContent = 'Email enviado com sucesso! Obrigado por se inscrever.';
      message.style.color = 'lightgreen';
    } else {
      const errorData = await response.json();
      message.textContent = errorData.error || 'Erro ao enviar email.';
      message.style.color = 'red';
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    message.textContent = 'Erro ao enviar email. Tente novamente.';
    message.style.color = 'red';
  }

  message.classList.remove('hidden');
  emailInput.value = ''; // Limpar o campo de email
});
