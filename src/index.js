import './style.css';

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    Promise.all([
      fetch(`${proxy}https://api.darksky.net/forecast/c585ab3790ed34a967b7c3810abd299b/${latitude},${longitude}`)
        .then(value => value.json()),
      fetch(`https://api.giphy.com/v1/gifs/translate?api_key=11Fe1ivk6MxFFhuVm6lZdo7ZRtLwQ1Kf&s=${summary}-cloudy`)
        .then(value => value.json())
    ]).then((responses) => {
      const response1 = responses[0];
      const response2 = responses[1];
      const { timezone, currently } = response1;
      const { temperature, summary, humidity } = currently;
      document.getElementById('timezone').innerHTML = timezone;
      document.getElementById('temperature').innerHTML = temperature;
      document.getElementById('summary').innerHTML = summary;
      document.getElementById('humidity').innerHTML = humidity;
      document.getElementById('img-weather').src = response2.data.images.original.url;
    }).catch((error) => {
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = error;
    });
  });
} else {
  document.getElementById('error').innerHTML = error;
}
