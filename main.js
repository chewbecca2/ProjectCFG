

   

   const form = document.getElementById("thanks"); 
        const successMessage = 
            document.getElementById("congo"); 
  
        form.addEventListener("submit", function (e) { 
            e.preventDefault(); 
            successMessage.style.display = "block"; 
        }); 



        let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
           showSlides((slideIndex += n));
        }
        
        function currentSlide(n) {
           showSlides((slideIndex = n));
        }
        
        function showSlides(n) {
           let i;
           let slides = document.getElementsByClassName("imgSlides");
           let dots = document.getElementsByClassName("demo");
           let captionText = document.getElementById("caption");
           if (n > slides.length) {
              slideIndex = 1;
           }
           if (n < 1) {
              slideIndex = slides.length;
           }
           for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
           }
           for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
           }
           slides[slideIndex - 1].style.display = "block";
           dots[slideIndex - 1].className += " active";
           captionText.innerHTML = dots[slideIndex - 1].alt;
        }
     
     
     
 
var currency = "BTC";
var url = "https://api.coinbase.com/v2/exchange-rates?currency=" + currency;
var usd = document.querySelector(".usd");
function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
    usd.innerHTML = response.data.rates.USD + " USD";
  };
  xhr.open("GET", url, true);
  xhr.setRequestHeader("CB-VERSION", "2018-01-01");
  xhr.send();
}
makeRequest();



var $element=$('.each-event, .title');
var $window = $(window);
$window.on('scroll resize', check_for_fade);
$window.trigger('scroll');
function check_for_fade() { 
    var window_height = $window.height();
    
    $.each($element, function (event) {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_offset = $element.offset().top;
        space = window_height - (element_height + element_offset -$(window).scrollTop());
        if (space < 60) {
            $element.addClass("non-focus");
        } else {
            $element.removeClass("non-focus");
        }
 
    });
};





