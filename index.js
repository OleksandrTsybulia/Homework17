let billAmount = prompt("Вкажіть загальну суму рахунку");
let tipsPercent = prompt("Вкажіть суму чайових");

if (billAmount === null || tipsPercent === null) {
  alert("Canceled");
} else {
  if (
    billAmount.trim() === "" ||
    tipsPercent.trim() === "" ||
    isNaN(billAmount) ||
    isNaN(tipsPercent) ||
    billAmount <= 0 ||
    tipsPercent < 0 ||
    tipsPercent > 100
  ) {
    alert("Invalid input data");
  } else {
    billAmount = Number(billAmount);
    tipsPercent = Number(tipsPercent);

    let totalPercent = (billAmount * tipsPercent) / 100;
    let totalAmount = billAmount + totalPercent;

    alert(
      `Check sum: ${billAmount.toFixed(2)}
       Tip: ${tipsPercent}%
      Tip amount: ${totalPercent.toFixed(2)}
      Total sum to pay: ${totalAmount.toFixed(2)}`,
    );
  }
}
