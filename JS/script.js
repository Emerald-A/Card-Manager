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
let arr = [];
let product = JSON.parse(localStorage.getItem('details'));
if (product != null) {
    arr = product;
}
var cardNum = document.getElementById("cardNumber");

cardNum.onkeyup = function () {
    if (cardNum.value.length % 5 == 0) {
        cardNum.value += " ";
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



let cardHolderName = "";
let cardNumber = "";
let CVC = "";
let mm = "";
let yy = "";

function valueAlerter(params) {

    cardHolderName = document.getElementById("cardHolderName").value;
    cardNumber = document.getElementById("cardNumber").value;
    CVC = document.getElementById("CVC").value;
    mm = document.getElementById("MM").value;
    yy = document.getElementById("YY").value;

    // console.log(cardHolderName);
    // console.log(cardNumber);
    // console.log(CVC);
     if (cardHolderName !== "" && cardNumber !== "" && CVC !== "") {
        arr.push(
            {
               name: cardHolderName,
               cardNumber: cardNumber,
               cvv: CVC, 
               mm: mm, 
               yy: yy, 
            }
            );
     }
   

        console.log("array",arr);
        localStorage.setItem("details", JSON.stringify(arr));

        success();
       

    cardHolderName = document.getElementById("cardHolderName").value = "";
    cardNumber = document.getElementById("cardNumber").value = "";
    CVC = document.getElementById("CVC").value = "";

     document.getElementById("MM").value = "";
     document.getElementById("YY").value = "";

    document.getElementById("holderName").innerText = cardHolderName;
    document.getElementById("uniqueNumber").innerText = cardNumber;
    document.getElementById("cardCVC").innerText = CVC;
}

function success(){
    swal({
    title: "Good job!",
    text: "SUCCESSFULLY ADDED CARD!",
    icon: "success",
    button: "OK!",
});
}
