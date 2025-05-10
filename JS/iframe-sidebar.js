const iframe_selectors = document.querySelectorAll(".iframe-selector")
const a_iframe_selectors = document.querySelectorAll(".iframe-selector a.nav-link")
const iframe = document.getElementById("content")


const aggiornaIframe =() => {
    const params = new URLSearchParams(window.location.search);
    const sezione = params.get('sezione');
    
    
    if (sezione) {
        iframe.src = "./sezione_" + sezione + ".htm"
    }

    for(let i = 0; i < a_iframe_selectors.length; i++) {
        a_iframe_selectors[i].classList.remove("active");
    }
    a_iframe_selectors[parseInt(sezione)-1].classList.add("active");

}

aggiornaIframe();

window.addEventListener('popstate', aggiornaIframe);