var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if(n > slides.length) {
        slideIndex = 1;                     //마지막 사진에서 다음 사진은 처음으로
    }

    if(n < 1) {
        slideIndex = slides.length;         //0 번째 사진은 없기에 맨 마지막 사진으로
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   //이전의 사진 안보이게 하기
    }

    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}