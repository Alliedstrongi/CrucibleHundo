//get the start and end numbers from the inputs
//Entry point AKA Controller F(x)
function getValues() {
  let startValue = document.getElementById('startValue').value;
  let endValue = document.getElementById('endValue').value;

  let startNumber = parseInt(startValue);
  let endNumber = parseInt(endValue);

  if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {

    let numberArray = generateNumber(startNumber, endNumber);
    displayNumbers(numberArray);

  } else {
    Swal.fire({
      icon:'error',
      title: 'Oops!',
      text: 'Please enter a valid number for the start and end values'
    });
  }

  let numberArray = generateNumber(startNumber, endNumber);
  displayNumbers(numberArray);
} 

//Generate the range of numbers to display
//Business/logic F(x)
function generateNumber(start, end) {
  let basketOfNumbers = [];

  for (let number = start; number <= end; number++) {
    basketOfNumbers.push(number); 
  }

  return basketOfNumbers;// => [0, 1, 2... 100]

}

//shows the generated numbers on the page
//and bolds even numbers (aka view function)
function displayNumbers(numbers) {
  
  let results = ''; 

  for (let index = 0; index < numbers.length; index++) {
    let currentNumber = numbers[index];

    if (currentNumber % 2 == 0) {
    results += `<tr><td class="evenNumber">${currentNumber}</td></tr>`;
  } else {
    results += `<tr><td>${currentNumber}</td></tr>`;
  }
}

  let tableBody = document.getElementById('results');
  tableBody.innerHTML = results; 

}