document
  .getElementById('cadastroForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const amount = document.getElementById('amount').value;
    const readingDate = document.getElementById('readingDate').value;

    fetch('http://localhost:3000/water-usage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        amount: amount,
        readingDate: readingDate,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('Cadastro realizado com sucesso!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao realizar cadastro.');
      });
  });

document.getElementById('consultar').addEventListener('click', function () {
  fetch('http://localhost:3000/water-usage')
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Erro ao consultar dados.');
    });
});
