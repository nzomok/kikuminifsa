function openMenu() {
  document.getElementById("sidebar").style.marginLeft = "0%";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("overlay-sidebar").style.display = "block";

}


function closeMenu() {
    document.getElementById("sidebar").style.marginLeft = "-100%";
    document.getElementById("overlay-sidebar").style.display = "none";

  }

function closeAd(){
  document.getElementById("candlads").style.marginLeft = "-100%";
  document.getElementById("close-ad-bar").style.display = "none";
  document.getElementById("overlay").style.display = "none";


  }

function openAd(){
  document.getElementById("candlads").style.marginLeft = "0%";
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

function scrollfunction() {
  let e = document.getElementById("loancal");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}


function computeloan(){
  const amount = document.querySelector('#amount').value;
  const months = document.querySelector('#months').value;


  if(amount <= 5000 && amount >= 500){
    document.querySelector('#interest-rate').innerHTML = `Our monthly interest rate for Ksh ${amount} = 0.33%`;
  }
  else if(amount > 5000 && amount <= 500000){
    document.querySelector('#interest-rate').innerHTML = `Our monthly interest rate for Ksh ${amount} = 1.5%`
  }
  else if(amount > 500000){
    document.querySelector('#interest-rate').innerHTML = `Oops!! Try a lower amount not more than Ksh 500,000.`
  }
  else if(amount < 500){
    document.querySelector('#interest-rate').innerHTML = `Oops!! The lowest amount is Ksh 500`
  }


  if(months <= 3 && amount >= 500 && amount <= 5000){
    const interest = (0.33 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");

    document.querySelector('#entered-amount').innerHTML = `Amount Entered: Ksh ${amount}`
    document.querySelector('#payment').innerHTML = `Monthly payment: Ksh ${payment}`
    document.querySelector('#total-payment').innerHTML = `Total payment: Ksh ${total_pay}`
  }
  else if(months > 3 && amount <= 5000 ){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 3 months`
  }
  else if(months <= 3 && amount < 500){
    document.querySelector('#payment').innerHTML = `Oops!! The amount you entered is below the our minimum amount of Ksh 500`

  }


   if (months <= 6 && amount >= 5000 && amount <= 10000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `Amount Entered: Ksh ${amount}`
    document.querySelector('#payment').innerHTML = `Monthly payment: Ksh ${payment}`    
    document.querySelector('#total-payment').innerHTML = `Total payment:  Ksh ${total_pay}`
  }
  else if(months > 6 && amount <= 10000 && amount > 5000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 6 months`
  }


  if (months <= 9 && amount > 10000 && amount <= 20000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `Amount Entered: Ksh ${amount}`
    document.querySelector('#payment').innerHTML = `Monthly payment: Ksh ${payment}`
    document.querySelector('#total-payment').innerHTML = `Total payment:  Ksh ${total_pay}`
  }
  else if(months > 9 && amount <= 20000 && amount > 10000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 9 months`
  }

  if (months <= 12 && amount > 20000 && amount <= 50000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `Amount Entered: Ksh ${amount}`
    document.querySelector('#payment').innerHTML = `Monthly payment: Ksh ${payment}`    
    document.querySelector('#total-payment').innerHTML = `Total payment: Ksh ${total_pay}`
  }
  else if(months > 12 && amount <= 50000 && amount > 20000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 12 months`
  }

  if (months <= 18 && amount > 50000 && amount <= 80000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `Amount Entered: Ksh ${amount}`
    document.querySelector('#payment').innerHTML = `Monthly payment: Ksh ${payment}`    
    document.querySelector('#total-payment').innerHTML = `Total payment: Ksh ${total_pay}`
  }
  else if(months > 18 && amount <= 80000 && amount > 50000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 18 months`
  }

  if (months <= 24 && amount > 80000 && amount <= 100000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `Amount Entered: Ksh ${amount}`
    document.querySelector('#payment').innerHTML = `Monthly payment: Ksh ${payment}`
    document.querySelector('#total-payment').innerHTML = `Total payment: Ksh ${total_pay}`
  }
  else if(months > 24 && amount <= 100000 && amount > 80000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 24 months`
  }

  if (months <= 36 && amount > 100000 && amount <= 500000){
    const interest = (1.5 * amount)/ 100;
    let payment = ((amount / months) + interest).toFixed(0);
    let total_pay = (payment * months ).toFixed(0);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    total_pay = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.querySelector('#entered-amount').innerHTML = `Amount Entered: Ksh ${amount}`
    document.querySelector('#payment').innerHTML = `Monthly payment: Ksh ${payment}`    
    document.querySelector('#total-payment').innerHTML = `Total payment: Ksh ${total_pay}`
  }
  else if(months > 36 && amount <= 500000 && amount > 100000){
    document.querySelector('#payment').innerHTML = `Oops!! The maximum months payable for Ksh ${amount} is 36 months`
  }
  else if(amount > 500000){
    document.querySelector('#payment').innerHTML = `Amount ${amount} is too high`
  }



}
