import './style.css';

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${proxy}https://api.darksky.net/forecast/c585ab3790ed34a967b7c3810abd299b/${latitude},${longitude}`)
      .then(response => { return response.json(); })
      .then((response) => {
        const timezone = response.timezone;
        const { temperature, summary, humidity } = response.currently

        document.getElementById('timezone').innerHTML = timezone;
        document.getElementById('temperature').innerHTML = temperature;
        document.getElementById('summary').innerHTML = summary;
        document.getElementById('humidity').innerHTML = humidity;
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=11Fe1ivk6MxFFhuVm6lZdo7ZRtLwQ1Kf&s=${summary}-cloudy`)
          .then(response => { return response.json(); })
          .then((response) => {
            document.getElementById("img-weather").src = response.data.images.original.url;
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
} else {
  alert("Your broser does not support the app.");
}
