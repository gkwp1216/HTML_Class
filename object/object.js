// {key: value}
// key - 문자, 숫자, 문자열
// value - 원시값(number, string, ...), 객체(함수, 배열)

let apple =
{
    name : 'apple',
    'Hello!' : 'ㅎㅇ',
    0 : 1
}

console.log(apple.name); // 마침표 표기법 (dot notation)
console.log(apple['name']); // 대괄호 표기
//console.log(apple.Hello!)  // 특수문자가 포함된 경우 마침표 표기법으로는 접근하지 못함

console.log(apple['Hello!']) // 대괄호 표기법으로 접근

// 값 변경

apple.name = '사과'
console.log(apple.name)

// 속성 추가

apple.color = 'Red';

console.log(apple.color)
console.log(apple)

// 속성 제거

delete apple["Hello!"]
console.log(apple)