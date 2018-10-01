window.onload = function () {
  new Picker(document.querySelector('.js-month-picker'), {
    format: 'YYYY',
  });
};

function GetData() {
  var year = document.getElementById("year").value;
  var email = document.getElementById("email").value;
  var step1 = document.getElementById("amount").value;
  var step2 = document.getElementById("amount2").value;
  var step3 = document.getElementById("amount3").value;
  var step4 = document.getElementById("amount4").value;
  var step5 = document.getElementById("amount5").value;
  var step6 = document.getElementById("amount6").value;
}

