let result = document.getElementById('result');

function updateResult(val) {
  result.value += val;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);
}