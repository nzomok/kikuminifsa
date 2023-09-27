function openMenu() {
    document.getElementById("sidebar").style.display = "block";
}


function closeMenu() {
        document.getElementById("sidebar").style.display = "none";
    }

function closeAd(){
  document.getElementById("candlads").style.marginLeft = "-100%";
  document.getElementById("close-ad-bar").style.display = "none";
  document.getElementById("overlay").style.display = "none";


  }

function openAd(){
  document.getElementById("candlads").style.marginLeft = "1%";
  document.getElementById("close-ad-bar").style.display = "block";
  document.getElementById("candlads").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}


/* let x = document.getElementById("candlads");
setInterval(function(){
  x.style.height = "900px";
  x.style.marginTop = ("-100%");
  document.getElementById("open-ad-icon").style.display = "none";
}, 20000); */



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

