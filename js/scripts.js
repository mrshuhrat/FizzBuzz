var elFizzBuzzForm = document.querySelector('.page-form');
var elNumberInput = elFizzBuzzForm.querySelector('.number-input');
var elFizzList = document.querySelector('.fizz-list');
var elBuzzList = document.querySelector('.buzz-list');
var elFizzBuzzList = document.querySelector('.fizzbuzz-list');
var elFizzSpan = document.querySelector('.fizz');
var elBuzzSpan = document.querySelector('.buzz');
var elFizzBuzzSpan = document.querySelector('.fizzbuzz');

var fizzBuzzNumber = 15;
var fizzNumber = 3;
var buzzNumber = 5;

elFizzBuzzForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var fizzNumbers = [];
  var buzzNumbers = [];
  var fizzBuzzNumbers = [];
  
  var number = elNumberInput.value.trim();
  for (i = 1; i <= number; i++) {
    if (i % fizzBuzzNumber === 0) {
      fizzBuzzNumbers.push(i);
    } else if (i % fizzNumber === 0) {
      fizzNumbers.push(i);
    } else if (i % buzzNumber === 0) {
      buzzNumbers.push(i);
    }
  }

  elFizzBuzzList.innerHTML = '';
  elFizzList.innerHTML = '';
  elBuzzList.innerHTML = '';

  for (fizzBuzz of fizzBuzzNumbers) {
    var newLi = document.createElement('li');
    elFizzBuzzList.appendChild(newLi);
    newLi.textContent = fizzBuzz;
  }
  for (fizz of fizzNumbers) {
    var newLi = document.createElement('li');
    elFizzList.appendChild(newLi);
    newLi.textContent = fizz;
  }
  for (buzz of buzzNumbers) {
    var newLi = document.createElement('li');
    elBuzzList.appendChild(newLi);
    newLi.textContent = buzz;
  }

  elFizzSpan.textContent = fizzNumbers.length;
  elBuzzSpan.textContent = buzzNumbers.length;
  elFizzBuzzSpan.textContent = fizzBuzzNumbers.length;
})