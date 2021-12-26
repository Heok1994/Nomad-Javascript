const API_KEY = "9c3f5ecd078ad4fb8b93ebcefcb45a0e";

function onGeoOK(position) {
    //console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    // fetch 함수를 이용해 JS가 대신 url을 호출하도록 만듦
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert("Can't find you. No weathere for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);