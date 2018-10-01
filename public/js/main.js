const methods = require('./app.js');

window.onload = function () {
  new Picker(document.querySelector('.js-month-picker'), {
    format: 'YYYY',
  });
};

function GetData(){
  var year = document.getElementById("year").value;
  var email = document.getElementById("email").value;
  var range_1 = document.getElementById("range_1").value;
  var range_2 = document.getElementById("range_2").value;
  var range_3 = document.getElementById("range_3").value;
  var range_4 = document.getElementById("range_4").value;
  var range_5 = document.getElementById("range_5").value;
  var range_6 = document.getElementById("range_6").value;
  var range_7 = document.getElementById("range_7").value;
  var range_8 = document.getElementById("range_8").value;
  var range_9 = document.getElementById("range_9").value;
  var range_10 = document.getElementById("range_10").value;

  methods.InsertData(email, year, range_1, range_2, range_3, range_4, range_5, range_6, range_7, range_8, range_9, range_10);  
}