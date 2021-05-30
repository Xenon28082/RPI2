var slideIndex = 1;

function saveSliderVisibility() {
    const showAgainCheckBox = document.getElementById("show");
    if (showAgainCheckBox.checked) {
        window.localStorage.setItem('slider', '1');
    }
}

function loadSliderVisibility() {
    const sliderVisibility = window.localStorage.getItem('slider');
    if (sliderVisibility == null) {
        showSlider();
    }
    else{
        hideSlider();
    }
}

function hideSlider() {
    document.getElementById("slider").style.display = "none";
}

function showSlider() {
    document.getElementById("slider").style.display = "block";
}

function getSlideCount() {
    var dots = document.getElementsByClassName('dot');
    return dots.length;
}

function plusSlides(n) {
    var slides = document.getElementsByClassName('itemclass');
    slideIndex += n;
    showSlides(slideIndex);
    slides[slideIndex - 1].style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
}


function initializeSlider(texts) {

    var buf = 0;

    for (var i = 0; i < texts.length; i++) {
        var list = document.getElementById('slider-list');
        var dots = document.getElementById('dots');

        var dot = document.createElement('input');
        var item = document.createElement('div');
        item.style.width = "500px";
        item.style.height = "50px";
        item.style.display = 'flex';
        item.style.justifyContent = "center";
        item.style.alignItems = "center";
        item.className = 'itemclass';
        var parg = document.createElement('p');
        var text = document.createTextNode(texts[i]);

        parg.appendChild(text);
        item.appendChild(parg);
        list.appendChild(item);

        dot.setAttribute('class', 'dot');
        dot.setAttribute('type', 'radio');
        dot.setAttribute('name', 'r');
        if (i == 0) {
            dot.setAttribute('checked', '');
        }
        dots.appendChild(dot);
    }
}

function currentSlides(n) {
    var slides = document.getElementsByClassName('itemclass');
    showSlides(slideIndex = n);
    slides[slideIndex - 1].style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
}

function showSlides(n) {
    // alert("pressed: " + n)
    var i;
    var slides = document.getElementsByClassName('itemclass');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.backgroundColor = "#bbb";
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].style.backgroundColor = "#0000FF";
}

var preloadedTexts = ['START', 'SLIDE 1', 'SLIDE 2', 'SLIDE 3', 'SLIDE 4', 'SLIDE 5'];

document.addEventListener("DOMContentLoaded", () => {
    loadSliderVisibility();
    initializeSlider(preloadedTexts);

    showSlides(slideIndex);

    document.getElementById("cross").onclick = function () {
        hideSlider();
        saveSliderVisibility();
    }
    document.getElementById('arrow-left').onclick = function () {
        plusSlides(-1);
    }
    document.getElementById('arrow-right').onclick = function () {
        plusSlides(1);
    }
    document.addEventListener('keydown', function (event) {
        if (event.code == 'ArrowLeft') {
            plusSlides(-1);
        }
        if (event.code == 'ArrowRight') {
            plusSlides(1);
        }
        if (event.code == 'Escape') {
            hideSlider();
            saveSliderVisibility();
        }
    });

    var dots = document.getElementsByClassName('dot');
    for (var i = 0; i < dots.length; i++) {
        dots[i].onclick = function () {
            for(var j = 0; j < dots.length; j++){
                dots[j].style.backgroundColor = "#bbb";
            }
            this.style.backgroundColor = "#0000FF";
        }
    }
    document.getElementById('dots').addEventListener('click', () => {
        var colorToComp = 'rgb(0, 0, 255)';
        for (var i = 0; i < dots.length; i++) {
            if (dots[i].style.backgroundColor === colorToComp) {
                currentSlides(i + 1);
            }
        }
    });


});