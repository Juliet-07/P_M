// GET YEARS
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
    'X-RapidAPI-Key': '1de451b396mshfcab62054d384ffp1f0d99jsn8041e3486a09',
  },
};

fetch('https://car-data.p.rapidapi.com/cars/years', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// GET MAKES
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
    'X-RapidAPI-Key': '1de451b396mshfcab62054d384ffp1f0d99jsn8041e3486a09',
  },
};

fetch('https://car-data.p.rapidapi.com/cars/makes', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

//   GET TYPES
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
    'X-RapidAPI-Key': '1de451b396mshfcab62054d384ffp1f0d99jsn8041e3486a09',
  },
};

fetch('https://car-data.p.rapidapi.com/cars/types', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

//   GET CARS
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
    'X-RapidAPI-Key': '1de451b396mshfcab62054d384ffp1f0d99jsn8041e3486a09',
  },
};

fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
