const vendorlogos = document.querySelectorAll(".vendor-logo");
const next = document.querySelector(".next");
const back = document.querySelector(".back");
const body = document.body;
const logosarr = Array.from(vendorlogos);
let current = 3;

function nextLogo() {
  if (current < logosarr.length - 1) {
    logosarr[current].classList.add("hide");
    logosarr[current + 1].classList.remove("hide");

    current++;
  } else if (current >= logosarr.length - 1) {
    logosarr[logosarr.length - 1].classList.add("hide");
    logosarr[logosarr.length - 1 - current].classList.remove("hide");

    current = 0;
  }
}
function backLogo(){
    if (current < logosarr.length - 1) {
        logosarr[current].classList.add("hide");
        logosarr[current + 1].classList.remove("hide");
    
        current++;
      } else if (current >= logosarr.length - 1) {
        logosarr[logosarr.length - 1].classList.add("hide");
        logosarr[logosarr.length - 1 - current].classList.remove("hide");
    
        current = 0;
      }
}

next.addEventListener("click", () => {
  nextLogo();
});
back.addEventListener("click", () => {
    backLogo()
 
});

//autoLogo move 
const autoLogoChange = setInterval(() => {
    nextLogo()
}, 2000);

//updating counter
const counters = document.querySelectorAll('.num')

counters.forEach(counter =>{
    counter.innerText = '0'
    function updateCounter(){
        const target = +counter.getAttribute('data-target')
        const result = +counter.innerText
        const interval = target / 500
        if (result < target ){
            counter.innerText = `${Math.ceil(result + interval)}`
          setInterval(updateCounter, 1)
        } else{
            counter.innerText = target
        }
    }
    updateCounter()
})
console.log(1)