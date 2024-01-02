let menuBar = document.querySelector(".menuBar");
let nav = document.querySelector("nav");
let cancel = document.querySelector("nav small")
menuBar.onclick = () => {
    nav.classList.add("showMenu");
    cancel.style.display = "block"
    console.log("yes")
}

cancel.onclick = () =>{
    nav.classList.remove("showMenu");
    
}