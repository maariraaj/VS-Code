const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched');
    }, 1000);
});

fetchData
    .then(data => console.log(data)) // Data fetched
    .catch(error => console.error(error));
