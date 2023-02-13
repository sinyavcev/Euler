// O(sqrt(n)+n)
(function () {
  console.time("TIME");
  /*************************/
  const countDividers = (number) => {
    numberOfDividers = 0;
    for (let i = 1; i <= Math.sqrt(number); i++) {
      if (number % i == 0) numberOfDividers += 2;
    }
    return numberOfDividers;
  };

  let result = 1;
  let i = 2;

  while (countDividers(result) < 500) {
    result += i;
    i += 1;
  }
  /*************************/
  console.log(result);
  console.timeEnd("TIME");
})();
