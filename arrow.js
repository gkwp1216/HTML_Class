// 함수선언문 function name(){}
// 함수표현식 const name = function(){

// 화살표 함수 const name = () => {}             3가지가 다 같다?

// function add(a,b)
// {
//     return a+b;
// }

// const add = function(a,b)
// {
//     return a+b;
// }

// const add = (a,b) => {
//     return a+b;
// }

// return 값만 존재할 때
const add = (a,b) => a + b;
console.log(add(1,3));

// parameter 가 한개일 때
// function square(x)
// {
//     return x*x;
// }

// const square = function(x)
// {
//     return x*x;
// }

//const square = (x) => x*x;

//const square = x => x*x;

// 매개변수가 없는 경우
// function greet()
// {
//     return 'Hello'
// }

// const greet = () => 'Hello';
