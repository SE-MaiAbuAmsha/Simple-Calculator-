document.getElementById("op+-btn").addEventListener("click", function () {
  let firstNum = document.getElementById("num1").value;
  let secondNum = document.getElementById("num2").value;
  let result = add(Number(firstNum), Number(secondNum));
  document.getElementById("output").innerHTML = result;
});

document.getElementById("op--btn").addEventListener("click", function () {
  let firstNum = document.getElementById("num1").value;
  let secondNum = document.getElementById("num2").value;
  let result = sub(Number(firstNum), Number(secondNum));
  document.getElementById("output").innerHTML = result;
});
document.getElementById("op*-btn").addEventListener("click", function () {
  let firstNum = document.getElementById("num1").value;
  let secondNum = document.getElementById("num2").value;
  let result = multi(Number(firstNum), Number(secondNum));
  document.getElementById("output").innerHTML = result;
});
document.getElementById("op/-btn").addEventListener("click", function () {
  let firstNum = document.getElementById("num1").value;
  let secondNum = document.getElementById("num2").value;
  let result = divide(Number(firstNum), Number(secondNum));
  document.getElementById("output").innerHTML = result;
});
