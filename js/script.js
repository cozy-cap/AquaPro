function topFunction() {
  window.scrollTo({top: 0});
}

//Створити функцію, яка виводить текст з різним розміром шрифту. Функція має два аргументи: текстовий рядок і розмір шрифту. Використовуйте style-властивість fontSize.
function PrintText(text, size) {
  const targetDiv = document.getElementsByClassName("promo-banner")
  const bannerText = document.createElement("h1");
  bannerText.textContent = text;
  bannerText.style.fontSize = size;
  bannerText.style.fontWeight = "500";
  targetDiv[0].appendChild(bannerText);
}

//Використовуючи властивості елемента IMG style.top і style.left, зробіть сторінку, на якій невелика картинка кожну секунду виникає в новому місці екрану. Використовуйте setInterval.
function JumpingImg() {
  const imgElement = document.getElementById("jumping-img");
  const maxX = window.innerWidth - imgElement.offsetWidth;
  const maxY = window.innerHeight - imgElement.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  imgElement.style.left = randomX + "px";
  imgElement.style.top = randomY + "px";
}

//Знайти на сторінці всі <p> і змінити їх розмір на 15px. Використовувати getElementsByTagName, setAttribute
function ChangeAllP() {
  const pElements = document.getElementsByTagName("p");
  for (let i = 0; i < pElements.length; i++) {
    pElements[i].setAttribute("style", "font-size: 15pt;");
  }
}

//Текстовий годинник – використовувати функції setInterval або setTimeout об'єкта window.
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  document.getElementById('clock').textContent = timeString;
}

//Створити ефект поступового витирання (аналог фільтра) частини документа, використовуючи таймер.
let wipeTimer;
function WipeOutElement(targetId) {
  const element = document.getElementById(targetId);
  if (!element) {
    console.error(`Елемент з ID "${targetId}" не знайдено.`);
    return;
  }
  let wipePercentage = 0;
  clearInterval(wipeTimer);
  wipeTimer = setInterval(() => {
    wipePercentage += 1;
    element.style.clipPath = `inset(0 0 0 ${wipePercentage}%)`;
    if (wipePercentage >= 100) {
      clearInterval(wipeTimer);
    }
  }, 15);
}

document.addEventListener("DOMContentLoaded", function() {
  //1
  if (document.querySelector(".promo-banner")) {
    PrintText("Улюблені товари плавців зі знижкою до -50%", "12pt");
  }
  //2
  if (document.getElementById("jumping-img")) {
    setInterval(JumpingImg, 1000);
    JumpingImg();
  }
  //3
  ChangeAllP()
  //4
  if (document.getElementById("clock")) {
    setInterval(updateClock, 1000);
    updateClock();
  }
});