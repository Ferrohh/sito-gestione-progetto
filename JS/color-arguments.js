const colors = ["#FF0000", "#008000", "#FFFF00", "#00FFFF", "#0000FF"]

const cardss = document.querySelectorAll(".card")
const arguments = document.querySelectorAll(".argument-border")
for(let i = 0; i < cardss.length; i++) {
    cardss[i].style.boxShadow = "8px 8px 8px 8px " + colors[i];
    cardss[i].style.borderColor = colors[i].replace('0', '7');
    cardss[i].style.animationDelay = (((i+1)*0.33)) + "s";
}

for(let i = 0; i < arguments.length; i++) {
    arguments[i].style.borderColor = colors[i];
}
