const no = document.getElementById("no");
const yes = document.getElementById("yes");

no.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - no.clientWidth);
  const y = Math.random() * (window.innerHeight - no.clientHeight);
  no.style.position = "absolute";

  no.style.left = `${x}px`;
  no.style.top = `${y}px`;

  yes.style.height = parseInt(yes.style.height || "5") + 1 + "em";
  yes.style.width = parseInt(yes.style.width || "10") + 1 + "em";

  no.style.height = parseInt(no.style.height || "5") - 0.25 + "em";
  no.style.width = parseInt(no.style.width || "10") - 0.5 + "em";
  no.style.fontSize = parseInt(no.style.fontSize || "1") - 0.05 + "em";

  if (parseInt(no.style.height) <= 0 || parseInt(no.style.width) <= 0) {
    no.style.display = "none";
  }
});

const sub = document.getElementById("yes").addEventListener("click", () => {
  alert("I knew you would say yes! Let's be together forever! ❤️");
});
