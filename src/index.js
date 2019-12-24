import './style.css';

const proxy = 'https://cors-anywhere.herokuapp.com/';

const setGift = (summary) => {
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=11Fe1ivk6MxFFhuVm6lZdo7ZRtLwQ1Kf&s=${summary}%20cloudy`)
    .then(response => response.json())
    .then((response) => {
      document.getElementById('img-weather').src = response.data.images.original.url;
    })
    .catch((error) => {
      document.getElementById('error').style.display = 'block';
      document.getElementById('error').innerHTML = error;
    });
}

const getWeatherInfo = (coords) => {
  fetch(`${proxy}https://api.darksky.net/forecast/c585ab3790ed34a967b7c3810abd299b/${coords[0]},${coords[1]}`)
    .then(response => response.json())
    .then((response) => {
      const { timezone, currently } = response;
      const { temperature, summary, humidity } = currently;

      document.getElementById('timezone').innerHTML = timezone;
      document.getElementById('temperature').innerHTML = temperature;
      document.getElementById('summary').innerHTML = summary;
      document.getElementById('humidity').innerHTML = humidity;

      setGift(summary);
    })
    .catch((error) => {
      document.getElementById('error').style.display = 'block';
      document.getElementById('error').innerHTML = error;
    });
}

const startGeolocation = (city) => {
  document.getElementById('error').style.display = 'none';
  if (('geolocation' in navigator) && city === '') {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = [];
      coords.push(position.coords.latitude);
      coords.push(position.coords.longitude);
      getWeatherInfo(coords);
    });
  } else {
    fetch(`${proxy}http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=256d86b132c962dc71862d23501ecdc9`)
      .then(response => response.json())
      .then((response) => {
        const coords = [];
        coords.push(response.coord.lat);
        coords.push(response.coord.lon);
        getWeatherInfo(coords);
      })
      .catch((error) => {
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = 'Something went wrong try again';
      });
  }
}

startGeolocation('');

function changeType() {
  const fah = document.getElementById('fah');
  const cel = document.getElementById('cel');
  let grados = Number(document.getElementById('temperature').innerHTML);
  if (fah.className === 'active left-border') {
    fah.className = 'inactive left-border';
    cel.className = 'active right-border';
    grados = (grados - 32) / 1.8;
    document.getElementById('temperature').innerHTML = grados.toFixed(2);
  } else {
    fah.className = 'active left-border';
    cel.className = 'inactive right-border';
    grados = grados * 1.8 + 32;
    document.getElementById('temperature').innerHTML = grados.toFixed(2);
  }
}

document.getElementById('changeType').addEventListener('click', changeType, false);

document.getElementById('send').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  startGeolocation(city);
}, false);
