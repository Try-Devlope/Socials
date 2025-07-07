const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const declineButton = document.getElementById("decline-button");
const acceptButton = document.getElementById("accept-button");
const secretButton = document.getElementById("secret-button");

let hasClicked;

window.onbeforeunload = function() {
  if (hasClicked) return true;
};

function buttonClick(event) {
  event.preventDefault();
  if (!hasClicked) hasClicked = true;
  overlay.hidden = true;
  video.play();
  videoClick();
}

function videoClick(event) {
  if (event) event.preventDefault();
  const { documentElement } = document;
  if (documentElement.requestFullscreen) documentElement.requestFullscreen();
  else if (documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
  else if (documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
  else if (documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
}

acceptButton.addEventListener("click", buttonClick);
declineButton.addEventListener("click", buttonClick);
video.addEventListener("click", videoClick);

// 🧨 Botón secreto activa el modo terror
secretButton.addEventListener("click", () => {
  document.title = "Ya no puedes escapar...";
  document.getElementById("main-content").style.display = "none";
  document.getElementById("darkmode").hidden = false;
  document.getElementById("terror-audio").play();
});
