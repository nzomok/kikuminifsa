function openMenu() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("sidebar").style.marginLeft = "0%";
  document.getElementById("overlay-sidebar").style.display = "block";

}


function closeMenu() {
    document.getElementById("sidebar").style.marginLeft = "-100%";
    document.getElementById("overlay-sidebar").style.display = "none";

  }

function closeAd(){
  document.getElementById("candlads").style.marginTop = "-600%";
  document.getElementById("close-ad-bar").style.display = "none";
  document.getElementById("overlay").style.display = "none";


  }

function openAd(){
  document.getElementById("candlads").style.marginTop = "-120%";
  document.getElementById("close-ad-bar").style.display = "block";
  document.getElementById("candlads").style.display = "block";
  document.getElementById("overlay").style.display = "block";
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

function scrollfunction() {
  let e = document.getElementById("loancal");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}


function computeloan(){
  let amount = document.querySelector('#amount').value;
  const months = document.querySelector('#months').value;


  if(amount <= 5000 && amount >= 500){
    document.querySelector('#interest-rate').innerHTML = `Monthly interest rate for (Ksh ${amount}) = 4%`;
  }
  else if(amount > 5000 && amount <= 500000){
    document.querySelector('#interest-rate').innerHTML = `Monthly interest rate for (Ksh ${amount}) = 1.5%`
  }
  else if(amount > 500000){
    document.querySelector('#interest-rate').innerHTML = `Sorry!..The highest loan amount you can borrow is (Ksh 500,000.)`
  }
  else if(amount < 500){
    document.querySelector('#interest-rate').innerHTML = `Sorry!...The lowest loan amount is Ksh 500`
  }


  if(months <= 3 && amount >= 500 && amount <= 5000){
    const interest = (4 * amount) / 100;
    let payment = ((amount / months) + interest).toFixed(2);
    let total_pay = (payment * months ).toFixed(2);
    let amounts = document.querySelector('#amount').value;
    amount = amounts.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");

    document.querySelector('#entered-amount').innerHTML = `${amount}`
    document.querySelector('#payment').innerHTML = `${payment}`
    document.querySelector('#total-payment').innerHTML = `${total_pay}`
  }
  else if(months > 3 && amount <= 5000 ){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 3 months`
  }
  else if(months <= 3 && amount < 500){
    document.querySelector('#payment').innerHTML = `Sorry!...The lowest loan amount is Ksh 500`

  }


   if (months <= 6 && amount >= 5001 && amount <= 10000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    let amounts = document.querySelector('#amount').value;
    amount = amounts.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `${amount}`
    document.querySelector('#payment').innerHTML = `${payment}`    
    document.querySelector('#total-payment').innerHTML = `${total_pay}`
  }
  else if(months > 6 && amount <= 10000 && amount > 5000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 6 months`
  }


  if (months <= 9 && amount > 10000 && amount <= 20000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    let amounts = document.querySelector('#amount').value;
    amount = amounts.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `${amount}`
    document.querySelector('#payment').innerHTML = `${payment}`
    document.querySelector('#total-payment').innerHTML = `${total_pay}`
  }
  else if(months > 9 && amount <= 20000 && amount > 10000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 9 months`
  }

  if (months <= 12 && amount > 20000 && amount <= 50000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    let amounts = document.querySelector('#amount').value;
    amount = amounts.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `${amount}`
    document.querySelector('#payment').innerHTML = `${payment}`    
    document.querySelector('#total-payment').innerHTML = `${total_pay}`
  }
  else if(months > 12 && amount <= 50000 && amount > 20000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 12 months`
  }

  if (months <= 18 && amount > 50000 && amount <= 80000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    let amounts = document.querySelector('#amount').value;
    amount = amounts.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `${amount}`
    document.querySelector('#payment').innerHTML = `${payment}`    
    document.querySelector('#total-payment').innerHTML = `${total_pay}`
  }
  else if(months > 18 && amount <= 80000 && amount > 50000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 18 months`
  }

  if (months <= 24 && amount > 80000 && amount <= 100000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    let amounts = document.querySelector('#amount').value;
    amount = amounts.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `${amount}`
    document.querySelector('#payment').innerHTML = `${payment}`
    document.querySelector('#total-payment').innerHTML = `${total_pay}`
  }
  else if(months > 24 && amount <= 100000 && amount > 80000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 24 months`
  }

  if (months <= 36 && amount > 100000 && amount <= 500000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    let amounts = document.querySelector('#amount').value;
    amount = amounts.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = ` ${amount}`
    document.querySelector('#payment').innerHTML = `${payment}`    
    document.querySelector('#total-payment').innerHTML = `${total_pay}`
  }
  else if(months > 36 && amount <= 500000 && amount > 100000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 36 months`
  }
  else if(amount > 500000){
    document.querySelector('#payment').innerHTML = `Amount ${amount} is too high`
  }
}


/*loan page js*/

var myvar;

function loading(){
  myvar = setTimeout(loadpage, 3000);
}
function loadpage(){
  document.getElementById("loader").style.display = "none";
  document.getElementById("loan-main-container").style.display = "block";
}

function gohome(){
  window.open("index.html", "_self");
}

function directions(){
  document.getElementById("iframe").src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d319.1284762501036!2d37.70609768495678!3d-1.7869972373156109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNDcnMTIuNSJTIDM3wrA0MicyMi40IkU!5e0!3m2!1sen!2ske!4v1696857654744!5m2!1sen!2ske";
  document.getElementById('iframe').stylr.display = "block";

}


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}
