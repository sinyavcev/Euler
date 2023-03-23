//O(n)
console.time('TIME')
let stringArray =String(BigInt(Math.pow(2,1000))).split(''),
    numberArray = stringArray.map(Number),
    result = numberArray.map(item=>sum+=item, sum=0).reverse()[0]
console.timeEnd('TIME')

console.log(result);