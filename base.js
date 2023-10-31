
const thmSw = document.getElementById('thmSw');
const thmSts = document.getElementById('thmSts');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const pressure = document.getElementById('pressure');
const uv = document.getElementById('uv');

thmSw.addEventListener('change', () => {
  let theme = document.getElementById("theme");
  if (thmSw.checked) {
    document.body.classList.add('bg-dark');
    thmSts.textContent = 'Dark Mode';

    if (theme.getAttribute("href") == "./light-mode.css") {
      theme.href = "./dark-mode.css";

    }

  } else {
    document.body.classList.remove('bg-dark');
    thmSts.textContent = 'Light Mode';
    theme.href = "./light-mode.css";
  }
});

let switchMode = document.getElementById("switch");

switchMode.onclick = function () {
  if (thmSw.checked) {
    if (theme.getAttribute("href") == "./light-mode.css") {
      theme.href = "./dark-mode.css";
      sunrise.src = "./icons/sunrise-dark 1.svg";
      sunset.src = "./icons/sunset-dark 1.png";
      humidity.src = "./icons/humidity 1 dark.svg";
      wind.src = "./icons/wind 1 dark.svg";
      pressure.src = "./icons/pressure-dark.svg";
      uv.src = "./icons/uv-dark.svg";
    }
  }
  else {
    theme.href = "./light-mode.css";
    sunrise.src = "./icons/sunrise-white 1.svg";
    sunset.src = "./icons/sunset-white 1.png";
    humidity.src = "./icons/humidity 1.svg";
    wind.src = "./icons/wind 1.svg";
    pressure.src = "./icons/pressure-white 1.svg";
    uv.src = "./icons/uv-white 1.svg";
  }
}

// current location btt

let city_line = document.getElementById("city_line")

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Геолокация не поддерживается вашим браузером.");
  }
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitude + "&lon=" + longitude;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let city = data.address.city;
      city_line.value = city;

    })
    .catch(error => {
      console.log(error);
      alert("Ошибка при получении города.");
    });
}


