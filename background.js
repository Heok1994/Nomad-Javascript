const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.width = 1000 ;

// JS에서 생성한 img태그를 html 문서의 body에 추가하기
document.body.appendChild(bgImage);