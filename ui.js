class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feelsLike');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.uv = document.getElementById('w-uv');
  }

  paint(weather){
    this.location.textContent = weather.data[0].city_name + ", " + weather.data[0].country_code;
    this.desc.textContent = weather.data[0].weather.description;
    this.string.textContent = weather.data[0].temp + ' C';
    this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`);
    this.feelsLike.textContent = `Feels Like: ${weather.data[0].app_temp} C`;
    this.humidity.textContent = `Humidity: ${weather.data[0].rh} %`
    this.pressure.textContent = `Pressure: ${weather.data[0].pres} millibars`;
    this.uv.textContent = `UV Index: ${weather.data[0].uv.toFixed(1)}`;
  }
}

