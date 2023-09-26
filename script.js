function openMenu() {
    document.getElementById("sidebar").style.display = "block";
}


function closeMenu() {
        document.getElementById("sidebar").style.display = "none";
    }

function closeAd(){
  document.getElementById("candlads").style.marginTop = "-30%";
  document.getElementById("close-ad-bar").style.display = "none";
  document.getElementById("mobile-menu-ad").style.display = "block";


  }

function openAd(){
  document.getElementById("candlads").style.marginTop = "-100%";
  document.getElementById("mobile-menu-ad").style.display = "none";
  document.getElementById("close-ad-bar").style.display = "block";
}


let x = document.getElementById("candlads");
setInterval(function(){
  x.style.marginTop = "-100%";
  document.getElementById("open-ad-icon").style.display = "none";
}, 20000);



    var loan = document.getElementByClassName("more-services");
    var i;

for (i = 0; i < loan.length; i++) {
    loan[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var loans = this.nextElementSibling;
      if (loans.style.maxHeight){
        loans.style.maxHeight = null;
      } else {
        loans.style.maxHeight = loans.scrollHeight + "px";
      } 
    });
  }


document.addEventListener('DOMContentLoaded', function () {window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);})

