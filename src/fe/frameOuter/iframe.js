const btnExternal = document.querySelector('#btn_external');

btnExternal.onclick = () => {
  console.log('External script is trying to fetch data from http://localhost:2000');
  fetch("http://localhost:2000")
    .then(req => req.text())
    .then(data => console.log('Fetched data:', data))
    .catch(() => console.log('Fetch error'));
};
