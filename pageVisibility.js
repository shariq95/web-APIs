// ask if page is visible past we used onblur onfocus etc

window.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("tab is hidden");
  } else {
    console.log("tab is focused");
  }
});

// or can use a switch statement for using prerender case
// can be used to pause a video when other tab is opened

// project can be made using video and audio
