const darklightclick = () => {
    const element = document.documentElement;

    const cards = document.getElementsByClassName("card")
    const lightIcons = Array.from(document.querySelectorAll(".light"));
    const darkIcons = Array.from(document.querySelectorAll(".dark"));

    const containers = document.getElementsByClassName("cont")

    element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";


    if(lightIcons.length > 0) {
        for(let i of lightIcons) {
            i.classList.remove("light");
            i.classList.add("dark");
        }
    }
    else {
        for(let i of darkIcons) {
            i.classList.remove("dark");
            i.classList.add("light")
        }
    }
    

    
    blackToWhite(cards, "bg-black", "bg-white", "text-light", "text-dark")

    blackToWhite(containers, "bg-black", "bg-light", "text-light", "text-dark")
}

const blackToWhite = (list, bg_black, bg_white, txt_light, txt_dark) => {
    for(let c of list) {
        let classes = c.classList

        if(classes.contains(bg_black)) {
            c.classList.remove(bg_black)
            c.classList.add(bg_white)
            c.classList.remove(txt_light)
            c.classList.add(txt_dark)
        }
        else {
            c.classList.remove(bg_white)
            c.classList.add(bg_black)
            c.classList.remove(txt_dark)
            c.classList.add(txt_light)
        }
    }
}