let billAmount = prompt("Вкажіть загальну суму рахунку");
console.log(+billAmount);

let tipsPercent = prompt("Вкажіть суму чайових");
console.log(+tipsPercent);

if (billAmount === null || tipsPercent === null) {
  alert("Canceled");
} else if (
  billAmount <= 0 ||
  isNaN(billAmount) ||
  tipsPercent < 0 ||
  tipsPercent > 100 ||
  isNaN(tipsPercent)
) {
  alert("Invalid input data");
} else {
  billAmount = Number(billAmount);
  tipsPercent = Number(tipsPercent);
}

let totalPercent = (billAmount * tipsPercent) / 100;
let totalAmount = billAmount + totalPercent;

alert(`Check sum: ${billAmount.toFixed(2)}`);
alert(`Tip: ${tipsPercent}% `);
alert(`Tip amount: ${totalPercent.toFixed(2)}`);
alert(`Total sum to pay: ${totalAmount.toFixed(2)}`);
