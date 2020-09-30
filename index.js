const lEye = document.getElementById("SVGID_5_");
const rEye = document.getElementById("SVGID_9_");
// lEye.setAttribute("cx", 46);
// console.log(lEye.cx);

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function mouse_position(e) {
  // console.log(e.clientX + "," + e.clientY);
  let screenX = window.innerWidth;
  let screenY = window.innerHeight;

  // Left Eye Movement
  let lClampX = Number(e.clientX).map(0, screenX, 43, 49);
  let lClampY = Number(e.clientY).map(0, screenY, 28, 35);
  lEye.setAttribute("cx", lClampX);
  lEye.setAttribute("cy", lClampY);

  // Right Eye Movement
  let rClampX = Number(e.clientX).map(0, screenX, 23, 29);
  let rClampY = Number(e.clientY).map(0, screenY, 28, 35);
  rEye.setAttribute("cx", rClampX);
  rEye.setAttribute("cy", rClampY);

  // console.log(screenX);
}

// const contentItem = document.querySelectorAll(".content-item");
const circleMenuItem = document.querySelectorAll(".circle-menu-item");

function displayContent(className) {
  let contentItem = document.querySelector(`.${className}`);
  let contentWrapper = document.querySelector(".content");
  let closeButton = document.querySelector(".close-button");
  contentWrapper.classList.add("active");
  contentItem.classList.add("active");
  closeButton.classList.add("active");
}

function hideContent() {
  let contentItem = document.querySelectorAll(".content-item");
  let contentWrapper = document.querySelector(".content");
  let closeButton = document.querySelector(".close-button");
  contentWrapper.classList.remove("active");
  contentItem.forEach((item) => {
    item.classList.remove("active");
  });
  closeButton.classList.remove("active");
}

let close = document.querySelector(".close-button");
close.addEventListener("click", function () {
  hideContent();
});

circleMenuItem.forEach((options) => {
  options.addEventListener("click", function () {
    let dataLink = this.getAttribute("data-link") + "-page";
    displayContent(dataLink);
    // console.log(dataLink);
    // let contentItem = document.querySelectorAll(".content-item");
    // console.log(contentItem);
  });
});
