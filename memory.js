function add(a,b)
{
    return a+b;
}

const sum = add;

console.log(sum(1,2))
console.log(add(1,2))

//인자를 전달하지 않거나 1개만 전달한 경우
console.log(add())
console.log(add(5))