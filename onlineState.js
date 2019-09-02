// if the user is conline
console.log(navigator.online ? "online" : "offline");

//or
window.addEventListener("offline", networkStatus);
window.addEventListener("online", networkStatus);

function networkStatus(e) {
  console.log(e.type);
}

// can be used to show some user feedback so that user knows he is offline
