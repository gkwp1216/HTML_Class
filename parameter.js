function add(a = 1,b = 2)
{
    return a+b;
}

console.log(add())
console.log(add(2,3)) //2와 3이 함수에 들어간다

//rest parameter (나머지 매개변수)

// function sum (a,b,...numbers)
// {
//     console.log(a)
//     console.log(b)
//     console.log(numbers)
// }

function sum (...numbers)
{
    console.log(numbers)
}
sum(1,2,3,4,5);