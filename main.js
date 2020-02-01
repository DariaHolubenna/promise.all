const axios = require('axios');

Promise.all([
  axios.get('https://swapi.co/api/people/1/'),
  axios.get('https://swapi.co/api/people/3/'),
]).then((results) => {
  for (const i of results) {
    console.log(i.data);
  };
}).catch((error) => {
  console.log('error', error);
});
