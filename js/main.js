
let icon = document.querySelector(".menuIcon");
let ul = document.querySelector(".listnav");
$(".listnav").hide();
$("box-icon").click(function () {
    $(".listnav").slideToggle();
});

icon.style.cssText = "cursor: pointer;";


//////////////////////////////////////////////////////////////////////////////////////////////////
/*nav bar animated */
let nav = document.querySelector("nav");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        nav.style.display = "block";

    } else {
        nav.style.display = "none";

    }

    let topbtn = document.querySelector(".topscroll");
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        topbtn.style.display = "block";

    } else {

        topbtn.style.display = "none";

    }

    $(topbtn).click(function () {



        window.scrollTo({

            top: 0,
            behavior: "smooth",
        })



    });

}

///////////////////////////////////////////////////////////////////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
//link in nav bar
let abut = document.querySelector(".about");
let header = document.querySelector(".image-h");

$(abut).click(function () {

    header.style.cssText = `
    background: linear-gradient(rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.192)), url('/images/ximage_2.jpg.pagespeed.ic.FWMjlnCNLs.webp');
    ${$(".listnav").hide()}
    position: relative;
    `;
    header.innerHTML = `


    <div class="row">
                    <div class="logo">
                        <h1><a href="#">Vacation</a></h1>
                        <p><a href="#">TRAVEL AGENCY</a></p>
                    </div>
                    <ul class="listHeader">
                        <li><a href="index.html" style="color: orange;">Home</a></li>
                        <li><a class="about" href="#">About</a></li>
                        <li><a class="destination" href="index.html">Destination</a></li>
                        <li><a class="blog" href="index.html">Blog</a></li>
                        <li><a class="contact" href="index.html">Contact</a></li>
                        <li class="book" style="background-color: orange;"><a href="index.html">Book
                                Now</a></li>
                    </ul>
                </div>
    
    <h1 class="aboutus wow bounceInUp" data-wow-duration="1s">About Us</h1>
    <li class="aboutlink wow bounceInUp" data-wow-duration="1.5s"><a href="index.html" style="color: orange;">Home</a></li>
    `;
});



let destination = document.querySelector(".destination");
let header2 = document.querySelector(".image-h");

$(destination).click(function () {

    header2.style.cssText = `

    background: linear-gradient(rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.192)), url('/images/xdestination-3.jpg.pagespeed.ic.2JortQzSWj.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    ${$(".listnav").hide()}
    `;
    header2.innerHTML = `

<div class="row">
                    <div class="logo">
                        <h1><a href="#">Vacation</a></h1>
                        <p><a href="#">TRAVEL AGENCY</a></p>
                    </div>
                    <ul class="listHeader">
                        <li><a href="index.html" style="color: orange;">Home</a></li>
                        <li><a class="about" href="#">About</a></li>
                        <li><a class="destination" href="#">Destination</a></li>
                        <li><a class="blog" href="#">Blog</a></li>
                        <li><a class="contact" href="#">Contact</a></li>
                        <li class="book" style="background-color: orange;"><a href="index.html">Book
                                Now</a></li>
                    </ul>
                </div>
    
    <h1 class="aboutus wow bounceInUp" data-wow-duration="1s">Places to Travel</h1>
    <li class="aboutlink wow bounceInUp" data-wow-duration="1.5s"><a href="index.html" style="color: orange;">Home</a></li>
    `;
});



let blog = document.querySelector(".blog");
let header3 = document.querySelector(".image-h");

$(blog).click(function () {

    header3.style.cssText = `

    background: linear-gradient(rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.192)), url('/images/Family.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    ${$(".listnav").hide()}
    `;
    header3.innerHTML = `

<div class="row">
                    <div class="logo">
                        <h1><a href="#">Vacation</a></h1>
                        <p><a href="#">TRAVEL AGENCY</a></p>
                    </div>
                    <ul class="listHeader">
                        <li><a href="index.html" style="color: orange;">Home</a></li>
                        <li><a class="about" href="#">About</a></li>
                        <li><a class="destination" href="#">Destination</a></li>
                        <li><a class="blog" href="#">Blog</a></li>
                        <li><a class="contact" href="#">Contact</a></li>
                        <li class="book" style="background-color: orange;"><a href="index.html">Book
                                Now</a></li>
                    </ul>
                </div>
    
    <h1 class="aboutus wow bounceInUp" data-wow-duration="1s">Travel Tips & Blog</h1>
    <li class="aboutlink wow bounceInUp" data-wow-duration="1.5s"><a href="index.html" style="color: orange;">Home</a></li>
    `;
});

//////////////////////////////////////////////////////////////////////////////////////////
//links in header bar
let abut2 = document.querySelector(".about2");
let header2l = document.querySelector(".image-h");

$(abut2).click(function () {

    header2l.style.cssText = `
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.192)), url('/images/ximage_2.jpg.pagespeed.ic.FWMjlnCNLs.webp');
    ${$(".listnav").hide()}
    `;
    header2l.innerHTML = `


    <div class="row">
                    <div class="logo">
                        <h1><a href="#">Vacation</a></h1>
                        <p><a href="#">TRAVEL AGENCY</a></p>
                    </div>
                    <ul class="listHeader">
                        <li><a href="index.html" style="color: orange;">Home</a></li>
                        <li><a class="about" href="#">About</a></li>
                        <li><a class="destination" href="index.html">Destination</a></li>
                        <li><a class="blog" href="index.html">Blog</a></li>
                        <li><a class="contact" href="index.html">Contact</a></li>
                        <li class="book" style="background-color: orange;"><a href="index.html">Book
                                Now</a></li>
                    </ul>
                </div>
    
    <h1 class="aboutus wow bounceInUp" data-wow-duration="1s">About Us</h1>
    <li class="aboutlink wow bounceInUp" data-wow-duration="1.5s"><a href="index.html" style="color: orange;">Home</a></li>
    `;
});



let destination2 = document.querySelector(".destination2");
let header3l = document.querySelector(".image-h");

$(destination2).click(function () {

    header3l.style.cssText = `

    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.192)), url('/images/xdestination-3.jpg.pagespeed.ic.2JortQzSWj.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ${$(".listnav").hide()}
    `;
    header3l.innerHTML = `

<div class="row">
                    <div class="logo">
                        <h1><a href="#">Vacation</a></h1>
                        <p><a href="#">TRAVEL AGENCY</a></p>
                    </div>
                    <ul class="listHeader">
                        <li><a href="index.html" style="color: orange;">Home</a></li>
                        <li><a class="about" href="#">About</a></li>
                        <li><a class="destination" href="#">Destination</a></li>
                        <li><a class="blog" href="#">Blog</a></li>
                        <li><a class="contact" href="#">Contact</a></li>
                        <li class="book" style="background-color: orange;"><a href="index.html">Book
                                Now</a></li>
                    </ul>
                </div>
    
    <h1 class="aboutus wow bounceInUp" data-wow-duration="1s">Places to Travel</h1>
    <li class="aboutlink wow bounceInUp" data-wow-duration="1.5s"><a href="index.html" style="color: orange;">Home</a></li>
    `;
});



let blog2 = document.querySelector(".blog2");
let header4l = document.querySelector(".image-h");

$(blog2).click(function () {

    header4l.style.cssText = `

    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.192)), url('/images/Family.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ${$(".listnav").hide()}
    `;
    header4l.innerHTML = `

<div class="row">
                    <div class="logo">
                        <h1><a href="#">Vacation</a></h1>
                        <p><a href="#">TRAVEL AGENCY</a></p>
                    </div>
                    <ul class="listHeader">
                        <li><a href="index.html" style="color: orange;">Home</a></li>
                        <li><a class="about" href="#">About</a></li>
                        <li><a class="destination" href="#">Destination</a></li>
                        <li><a class="blog" href="#">Blog</a></li>
                        <li><a class="contact" href="#">Contact</a></li>
                        <li class="book" style="background-color: orange;"><a href="index.html">Book
                                Now</a></li>
                    </ul>
                </div>
    
    <h1 class="aboutus wow bounceInUp" data-wow-duration="1s">Travel Tips & Blog</h1>
    <li class="aboutlink wow bounceInUp" data-wow-duration="1.5s"><a href="index.html" style="color: orange;">Home</a></li>
    `;
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
//counter
var counts = setInterval(updated, 10);
var upto = 0;
function updated() {
    var num1 = document.querySelector(".num-1 span");
    var count = num1
    count.innerHTML = ++upto;
    if (upto === 300) {
        clearInterval(counts);
    }
}


var counts2 = setInterval(updated2);
var upto2 = 22000;
function updated2() {
    var num2 = document.querySelector(".num-2 span");
    var count = num2
    count.innerHTML = ++upto2;
    if (upto2 === 24000) {
        clearInterval(counts2);
    }
}

var counts3 = setInterval(updated3, 10);
var upto3 = 0;
function updated3() {
    var num3 = document.querySelector(".num-3 span");
    var count3 = num3
    count3.innerHTML = ++upto3;
    if (upto3 === 200) {
        clearInterval(counts3);
    }
}

//end code  counter
////////////////////////////////////////////////////////////////////////////////////////////////////////