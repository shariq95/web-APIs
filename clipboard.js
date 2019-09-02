let button = document.querySelector("button");

button.addEventListener("click", () => {
  select();
  copy();
});

// user interaction needed

// Select an element
function select() {
  let input = document.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

// copy the selected element
function copy() {
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error(err);
  }
}

//copy cut and paste can also be used

// clipboard.js library can be used as the old is complicated
