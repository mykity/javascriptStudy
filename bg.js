const body = document.querySelector('body');
const IMG_NUMBER = 5;

/*
function handleImgLoad() {
    console.log('finished loading');
} //이메세지는 깃허브 테스트용 메세지 handleImgLoad와는 아무런 상관이 없음
*/

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    // image.addEventListener('loaded', handleImgLoad); API에서 작업한다면 필요
    image.classList.add('bgImage');
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * 5); //Math.ceil 은 소수점 올림, floor는 소수점 버림
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
