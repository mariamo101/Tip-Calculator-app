const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const buttons = document.querySelectorAll(".tip_button");
const tipAmount = document.getElementById("amount");
const totalAmount = document.getElementById("total");
const custom = document.getElementById("custom1");
const billError = document.getElementById("billError");
const peopleError = document.getElementById("peopleError");
const reset = document.getElementById("reset");

let billValue = 0;
let peopleValue = 0;
let tipValue = 0;
let total = 0;
let tiPamount = 0;


billInput.addEventListener("input", (event) => {
    billValue = Number(event.target.value);
    if (billValue <= 0) {
      billError.style.display = "block";
      event.target.style.border = "2px solid #E17052";
    } else {
      billError.style.display = "none";
      event.target.style.border = "none";
    }
    calculate();
  });
  
  peopleInput.addEventListener("input", (event) => {
    peopleValue = Number(event.target.value);
    if (peopleValue <= 0 || peopleValue % 1 != 0) {
      peopleError.style.display = "block";
      event.target.style.border = "2px solid #E17052";
    } else {
      peopleError.style.display = "none";
      event.target.style.border = "none";
    }
    calculate();
  });
  
  let active_button = null;
 buttons.forEach((button) => {
  button.addEventListener("click", () => {
    active_button?.classList.remove("tip_button_active");
    tipValue = parseInt(button.textContent);
    button.classList.add("tip_button_active");
    active_button = button;
    console.log(active_button);
    calculate();
  });
});

custom.addEventListener("input", (event) => {
  if (Number(event.target.value) > 0 && Number(event.target.value) < 100) {
    active_button?.classList.remove("tip_button_active");
    tipValue = Number(custom.value);
    calculate();
  }
});
  
  reset.addEventListener("click", () => {
    billInput.value = "";
    billInput.style.border = "none";
    billValue = 0;
    peopleInput.value = "";
    peopleInput.style.border = "none";
    peopleValue = 0;
    tipValue = 0;
    active_button.classList.remove("tip_button_active");
    active_button = null;
    custom.value = "";
    billError.style.display = "none";
    peopleError.style.display = "none";
    tipAmount.textContent = `$0.00`;
    totalAmount.textContent = `$0.00`;
  });
  
  function calculate() {
    amount = ((billValue * (tipValue / 100)) / peopleValue).toFixed(2);
    total = (
      (billValue + billValue * (tipValue / 100)) /
      peopleValue
    ).toFixed(2);
  
    if (billValue <= 0 || peopleValue <= 0 || peopleValue % 1 != 0) {
      tipAmount.textContent = `$0.00`;
      totalAmount.textContent = `$0.00`;
    } else {
      tipAmount.textContent = `$${amount}`;
      totalAmount.textContent = `$${total}`;
    }
  }
  
