const fond = document.querySelector(".fond");

function presentation() {
  for (let i = 0; i < 20; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    fond.appendChild(box);
  }
  const box = document.querySelectorAll(".box");
  setInterval(() => {
    box.forEach((el) => {
      el.style.left = Math.random() * 100 + "vw";
      el.style.top = Math.random() * 100 + "vh";
      el.style.width = Math.random() * 100 + "px";
      el.style.height = Math.random() * 100 + "px";
    });
  }, 9000);
}
presentation();

const tab = [
  { titre: "HTML", nb: "97%" },
  { titre: "SASS", nb: "50%" },
  { titre: "CSS", nb: "91%" },
  { titre: "JS", nb: "68%" },
  { titre: "REACT", nb: "45%" },
  { titre: "NodeJS", nb: "10%" },
];

const content = document.querySelector(".content");

const mp = tab.map((el, id) => {
  return `<div class="dia dia-${id + 1}">
            <span>${el.titre}</span>
            <span>${el.nb}</span>
          </div>`;
});
content.innerHTML = mp.join("");
const dia = document.querySelectorAll(".dia");

dia.forEach((el, id) => {
  console.log(el);
  el.style.top = Math.random() * 50 + "%";
  el.style.left = Math.random() * 70 + "%";
  el.style.animationDelay = Math.random() * 3 + "s";

  if(el.style.top < 50 + "%"){
    el.style.top = Math.random() * 50 + "%";
  }
  if(el.style.left < 80 + "%"){
  el.style.left = Math.random() * 70 + "%";
  }
});

console.log(dia);