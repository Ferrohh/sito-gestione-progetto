/*
const leader = document.getElementById("leader")
const impresa = document.getElementById("impresa")
const progetto = document.getElementById("progetto")
const stayfocusd = document.getElementById("stayfocusd")
*/

let scrollY = 0;

window.addEventListener("scroll", () => {
    scrollY = document.documentElement.scrollTop;
})

const tileEffect = ev => {
    
    for(let i = 0; i < cards.length; i++) {
        let element = document.documentElement;
        let dlClass;

        if(element.dataset.bsTheme == "light") {
            dlClass = "c-dark";
        }
        else {
            dlClass = "c-light";
        }

        let light = cards[i].childNodes[cards[i].childNodes.length-1]
        light.setAttribute("class", dlClass)

        
        cards[i].addEventListener("mousemove", e => {
            const innerX = e.clientX - cards[i].offsetLeft;
            const innerY = (e.clientY - cards[i].offsetTop) + scrollY;
            
            light.style.left = innerX + "px";
            light.style.top = innerY + "px";
            light.classList.add(dlClass + "-active");

            const x = cards[i].offsetWidth / 2;
            const y = cards[i].offsetHeight / 2;

            const intensityX = 20;
            const intensityY = 10;

            let convertX = ((innerX - x) * intensityX) / x;
            let convertY = ((innerY - y) * intensityY) / y;

            cards[i].style.transform = "rotateY(" + (convertX * -1) + "deg) rotateX(" + (convertY * -1) + "deg)"

            cards[i].addEventListener("mouseout", e => {
                light.classList.remove(dlClass + "-active")
                cards[i].style.transform = "rotateY(0deg)"
            })
        })
    }
}


const cards = document.querySelectorAll(".card")
for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", tileEffect)
    const light = document.createElement("span")
    cards[i].appendChild(light);
}

//leader.addEventListener("mouseenter", tileEffect)
//impresa.addEventListener("mouseenter", tileEffect)
//progetto.addEventListener("mouseenter", tileEffect)
//stayfocusd.addEventListener("mouseenter", tileEffect)