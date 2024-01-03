let menuBar = document.querySelector(".menuBar");
let nav = document.querySelector("nav");
let cancel = document.querySelector("nav small")
let siteHeader = document.querySelector("header")
let addActive = document.querySelectorAll("nav ul li");
menuBar.onclick = () => {
    nav.classList.add("showMenu");
    cancel.classList.add("showCancel")
    console.log("yes")
}

cancel.onclick = () => {
    nav.classList.remove("showMenu");
}
 
nav.onanimationend = () => {
    nav.style.opacity = 1
}


window.onscroll = () => {
    console.log(window.scrollY)
    if(window.scrollY > 38 ){
        siteHeader.classList.add("makeSticky")
    }else {
            siteHeader.classList.remove("makeSticky")
        
    }
}

addActive.forEach(element => {
   

    element.onclick = () => {
        // addActive.forEach(element => {
        //     element.querySelector("a").classList.remove("activeLink")        
        // });

        element.querySelector("a").classList.add("activeLink")
    }
});


window.onload = () => {
    let page = location.pathname
    console.log("path = " + page)
    if(page.search("index") > 1){
        console.log("we are in home")
        addActive.forEach(element => {
            element.querySelector("a").classList.remove("activeLink")
        })
        document.querySelector("nav ul > li:first-child a").classList.add("activeLink");
    }else if(page.search("About") > 1){
        console.log("we are in about")
        addActive.forEach(element => {
            element.querySelector("a").classList.remove("activeLink")
        })
        document.querySelector("nav ul > li:nth-child(2) a").classList.add("activeLink");
    }else if(page.search("Services") > 1){
        console.log("we are in services")
        console.log("we are in about")
        addActive.forEach(element => {
            element.querySelector("a").classList.remove("activeLink")
        })
        document.querySelector("nav ul > li:nth-child(3) a").classList.add("activeLink");
    }
    else if(page.search("Testimonials") > 1){
        console.log("we are in testimonials")
        console.log("we are in about")
        addActive.forEach(element => {
            element.querySelector("a").classList.remove("activeLink")
        })
        document.querySelector("nav ul > li:nth-child(4) a").classList.add("activeLink");
    }
    else if(page.search("Contact") > 1){
        console.log("we are in contact")
        console.log("we are in about")
        addActive.forEach(element => {
            element.querySelector("a").classList.remove("activeLink")
        })
        document.querySelector("nav ul > li:nth-child(5) a").classList.add("activeLink");
    }

}


