var billAmount = document.querySelector("#bill-amt");
var nextBtn = document.querySelector(".btn-next");
var paidAmount = document.querySelector("#paid-amt");
var calBtn = document.querySelector(".btn-submit");



var billSection = document.querySelector(".bill-section");

var notes = [2000, 500, 100, 20, 10, 5, 2, 1];
var returnAmount = 0;
var noOfNotes = [0,0,0,0,0,0,0,0];

function calculateReturn(amount){
    for (var i=0;i<noOfNotes.length;i++){
        noOfNotes[i] = Math.floor(amount/notes[i]);
        console.log(noOfNotes[i]);
        amount = amount - noOfNotes[i]*notes[i];
        console.log(amount);
    }

    console.log(noOfNotes);
}

nextBtn.addEventListener("click", ()=>{
    console.log("clicked");
    if(billAmount.value){
        billSection.style.display="block";
    }else{
        alert("Please enter Bill Amount !!!");
    }
})

calBtn.addEventListener("click", ()=>{
    document.getElementById("table").style.display = "none";
    returnAmount = paidAmount.value - billAmount.value;

    if(returnAmount==0){
        document.getElementById("returned-amt").innerText = "wow! Exact Amount Paid";
    }
    else if (returnAmount<0){
        document.getElementById("returned-amt").innerText =
          "You Paid Less Amount, Pay the bill";
    } else{
        calculateReturn(returnAmount);
    document.getElementById("table").style.display = "block";
    document.getElementById("returned-amt").innerText =
      "Returned Amount : " + returnAmount;
      for(let i=0;i<noOfNotes.length;i++)
          document.getElementById(notes[i].toString()).innerText = noOfNotes[i];

    }
});