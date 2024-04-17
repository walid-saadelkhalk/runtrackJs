document.getElementById('button').addEventListener('click', () => {
    fetch('expression.txt')
      .then(response => response.ok ? response.text() : Promise.reject('Erreur de récupération du fichier.'))
      .then(data => document.getElementById('content').innerHTML = `<p>${data}</p>`)
      .catch(error => console.error('Une erreur s\'est produite :', error));
  });
  