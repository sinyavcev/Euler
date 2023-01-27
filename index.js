// O(sqrt(n)+n)
(function () {
  console.time("TIME");
/*************************/
  const numb = 2000000
  let sum = 0;

  const isPrime = (num) => {

    if(num < 4){
      return true;
    }
    if(num % 2 == 0 || num % 3 == 0) {
      return false;
    }
    for(let j = 5; j <= Math.sqrt(num); j += 2){
      if(num % j == 0) {
        return false
      }
    }   
    return true;
}

  for (let i = 2; i <= numb; i++) {
    if(isPrime(i)) {
      sum+=i;
    }
  }
/*************************/
console.log(sum); // 142913828922
console.timeEnd('TIME') // ~280 ms
}());


