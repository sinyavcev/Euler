//O(n)

function numberToWord(num) {
  let ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let hundred = "hundred";
  
  if (num === 1000) {
    return "onethousand";
  } else if (num >= 100) {
    let result = ones[Math.floor(num / 100)] + hundred;
    if (num % 100 !== 0) {
      result += "and" + numberToWord(num % 100);
    }
    return result;
  } else if (num >= 20) {
    return tens[Math.floor(num / 10)] + ones[num % 10];
  } else {
    return ones[num];
  }
}

function euler17() {
    console.time('TIME')
    let count = 0;
    for (let i = 1; i <= 1000; i++) {
        count += numberToWord(i).length;
      }
    console.timeEnd('TIME')
    console.log(count);
}


euler17();

