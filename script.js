function openMenu() {
    document.getElementById("sidebar").style.display = "block";
}


function closeMenu() {
        document.getElementById("sidebar").style.display = "none";
    }



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

