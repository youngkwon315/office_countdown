const dayContainer = document.querySelector(".js-day"),
  body = document.querySelector("body"),
  dayTitle = dayContainer.querySelector("h1");

  const date = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

function getday() {
  const days = weekday[date.getDay()];
  dayTitle.innerText = `${days}`;
}

function paintImage() {
  const image = new Image();
  image.src = `images/${date.getDay()}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function init() {
  getday();
  paintImage();
}

init();
