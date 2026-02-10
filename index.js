const no = document.getElementById("no");
const yes = document.getElementById("yes");

// Making no inclicable and increasing the size of yes when hovering over no while reducing the size of no
no.addEventListener("mouseover", () => {
  // Get random x and y coordinates for the no button within the window bounds
  const x = Math.random() * (window.innerWidth - no.clientWidth);
  const y = Math.random() * (window.innerHeight - no.clientHeight);

  // Move the no button to the new random position
  no.style.position = "absolute";
  no.style.left = `${x}px`;
  no.style.top = `${y}px`;

  // Increase the size of the yes button
  yes.style.height = parseInt(yes.style.height || "5") + 1 + "em";
  yes.style.width = parseInt(yes.style.width || "10") + 1 + "em";
  yes.style.fontSize = parseInt(yes.style.fontSize || "2") + 0.1 + "em";

  // Decrease the size of the no button
  no.style.height = parseInt(no.style.height || "5") - 0.25 + "em";
  no.style.width = parseInt(no.style.width || "10") - 0.5 + "em";
  no.style.fontSize = parseInt(no.style.fontSize || "2") - 0.05 + "em";

  // Hide the no button if its size becomes too small
  if (parseInt(no.style.height) <= 0 || parseInt(no.style.width) <= 0) {
    no.style.display = "none";
  }
});

// Alerting a message when the yes button is clicked
const sub = document.getElementById("yes").addEventListener("click", () => {
  alert("I knew you would say yes! Let's be together forever! ❤️");
});
