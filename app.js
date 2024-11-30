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
      el.style.width = Math.random() * 200 + "px";
      el.style.height = Math.random() * 200 + "px";
    });
  }, 2000);
}
presentation();

function competence(){

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
  el.style.top = Math.random() * 60 + "%";
  el.style.left = Math.random() * 70 + "%";
  el.style.animationDelay = Math.random() * 5 + "s";

  if (el.style.top > 70 + "%") {
     el.style.top = Math.random() * 20 + "%";
  }
  if (el.style.left > 80 + "%") {
    el.style.left = Math.random() * 50 + "%";
  }






});


}
competence()

const boxSpan = document.querySelector(".content-span");
const span = document.querySelectorAll(".content-span span")
const navBarre = document.querySelector(".premierbarre")
const lien = document.querySelectorAll(".premierli")

boxSpan.addEventListener('click', ()=>{
  span.forEach((el, id)=>{
    el.classList.toggle('active')
  })
  navBarre.classList.toggle('mouve')
})

lien.forEach((el,id)=>{
  el.addEventListener('click', ()=>{

    span.forEach((el, id)=>{
      el.classList.remove('active')
    })
    navBarre.classList.remove('mouve')
  })

})
