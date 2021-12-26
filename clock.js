const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    // date.getHours() 의 값은 number -> string으로 변환
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 맨 처음에 보이는 시간 설정
setInterval(getClock, 1000);