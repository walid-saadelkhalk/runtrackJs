document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
      const key = button.dataset.key;
      fetch('doc.json')
          .then(response => response.json())
          .then(data => displayData(data[key]))
          .catch(error => console.error('Error fetching data:', error));
  });
});

function displayData(data) {
  document.getElementById('content').innerText = data;
}

