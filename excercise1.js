//  function takes two numbers and return maximum one 

// let number=max(10,6);
// console.log(number);
// function max(num1,num2){
//     return (num1>num2) ? num1:num2;
// }
// fizz buzz execercise



const output=fizzBuzz(false);
console.log(output);
function fizzBuzz(number){
    if (typeof number !=='number') return NaN
    if (number%3==0 && number%5==0) return 'FizzBuzz'
    if (number%3==0) return 'Fizz'
    if(number%5==0) return 'Buzz'
    return number
}