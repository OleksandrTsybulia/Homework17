let billAmount = prompt("Вкажіть загальну суму рахунку");
console.log(+billAmount);

let tipsPercent = prompt("Вкажіть суму чайових");
console.log(+tipsPercent);

if (billAmount === null || tipsPercent === null) {
  alert("Canceled");
} else {
  billAmount = Number(billAmount);
  tipsPercent = Number(tipsPercent);
}

if (
  billAmount <= 0 ||
  isNaN(billAmount) ||
  tipsPercent <= 0 ||
  tipsPercent > 100 ||
  isNaN(tipsPercent)
) {
  alert("Invalid input data");
} else {
  let totalPercent = (billAmount * tipsPercent) / 100;
  let totalAmount = +billAmount + +totalPercent;

  alert(`Загальна сума до сплати- ${totalAmount}`);
}
