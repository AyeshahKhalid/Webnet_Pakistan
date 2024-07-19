let slideIndex = 1;
let timer;

displaySlides(slideIndex);

function moveSlide(n) {
    clearTimeout(timer);
    displaySlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    displaySlides(slideIndex = n);
}

function displaySlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    console.log(slides.length,n);
    if (n > slides.length) { 
        slideIndex = 1 
    }
    if (n < 1) { 
        slideIndex = slides.length 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // slides[i].style.border = "1px solid red";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active-dot", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active-dot";
    timer = setTimeout(() => moveSlide(1), 2000);
}