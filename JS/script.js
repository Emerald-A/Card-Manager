// var cardNum = document.getElementById("cardNumber");

// function valueChecker() {
//      if (cardNum.value.length > 0 ) {
//           if (cardNum.value.length%4 == 0) {
//                var space= "  ";
//                cardValue = cardNum.value
//                cardNum.value = cardValue.toString() + space;
//                alert(cardValue)
//           }
//      }
     
// }
const date = new Date();

var cardNum = document.getElementById("cardNumber");

cardNum.onkeydown = function () {
    if (cardNum.value.length > 0) {

        if (cardNum.value.length % 4 == 0) {
            cardNum.value += "    ";
        }
    }
}



for (let year = 1900; year <= date.getFullYear(); year++) {
    var dateOption = document.getElementById("YY");
    var newYearOption = document.createElement("option");
    newYearOption.innerHTML = year;
    newYearOption.value = year;
    dateOption.appendChild(newYearOption)
}

for (let month = 01; month <= 12; month++) {
    var dateOption = document.getElementById("MM");
    var newMonthOption = document.createElement("option");
    newMonthOption.innerText = month;
    newMonthOption.value = newMonthOption.innerText;
    dateOption.appendChild(newMonthOption)
}



function expDateEditor(params) {
    var expMonth = document.getElementById("MM").innerText;
    if (expMonth == "MM") {
        document.getElementById("MM").style.color = "hsl(270, 3%, 87%)";
    }  else {
        document.getElementById("MM").style.color = "black"
    }
    alert(expMonth);
}

