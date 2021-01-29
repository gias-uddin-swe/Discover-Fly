document
  .getElementById("seat-increase-first-class")
  .addEventListener("click", function () {
    updateSeatQuantity("seat-count-first", 1);
    subtotalVatGrandTotal();
  });

document
  .getElementById("seat-decrease-first-class")
  .addEventListener("click", function () {
    updateSeatQuantity("seat-count-first", -1);
    subtotalVatGrandTotal();
  });

document
  .getElementById("seat-increase-second-class")
  .addEventListener("click", function () {
    updateSeatQuantity("seat-count-second", 1);
    subtotalVatGrandTotal();
  });
document
  .getElementById("seat-decrease-second-class")
  .addEventListener("click", function () {
    updateSeatQuantity("seat-count-second", -1);
    subtotalVatGrandTotal();
  });
// increase  Seat handeler
function updateSeatQuantity(id, n) {
  const seatInput = document.getElementById(id).value;
  const seatCount = parseInt(seatInput);
  const newSeatCount = seatCount + n;
  if (newSeatCount < 0) {
    newSeatCount = 0;
  }
  document.getElementById(id).value = newSeatCount;
}

//subtotal Cost calculate

function subtotal() {
  const subtotalCost = document.getElementById("seat-count-first").value;
  const subtotalAmount = parseInt(subtotalCost);
  const firstClassAmount = subtotalAmount * 150;
  const subtotalCostEconomy = document.getElementById("seat-count-second")
    .value;
  const subtotalAmountEconomy = parseInt(subtotalCostEconomy);
  const economyAmount = subtotalAmountEconomy * 100;
  const subtotal = firstClassAmount + economyAmount;
  document.getElementById("subtotal").innerText = subtotal;
  console.log("subtotal");
}

//total vat

function Vat() {
  const vatAmount = document.getElementById("subtotal").innerText;
  const vatNumber = parseFloat(vatAmount);
  const vat = vatNumber / 10;
  document.getElementById("vat").innerText = vat;
  console.log(vat);
}

function grandTotal() {
  const subtotalAmount = document.getElementById("subtotal").innerText;
  const subtotal = parseFloat(subtotalAmount);
  const vatAmount = document.getElementById("vat").innerText;
  const vat = parseFloat(vatAmount);
  const grandTotal = subtotal + vat;
  document.getElementById("total").innerText = grandTotal;
}
function subtotalVatGrandTotal() {
  subtotal();
  Vat();
  grandTotal();
}

// booking confirmation area
document.getElementById("book-now").addEventListener("click", function () {
  document.getElementById("first-section").style.display = "none";
  document.getElementById("second-section").style.display = "block";
});
