
// инициализация переменной
let hi = "Hello world";

// вывод переменных
alert(hi) // уведомлением
console.log(hi) // в консоль

// вывод диалогового окна
let a = prompt("Год?", '2022')

// конструкция if-else
if (a > 2020) {
    alert("hello")
} else {
    alert("asdsad")
}

// однострочная конструкция if-else
let t = (a > 2020) ? alert("hello") : alert("asdsad")

// еще выводы
alert(`Peter says:"${hi}"`) // 'Peter says:"Hello world"'
alert(+"6" + +"1") // 7 ("+" перед строкового числа делает строку числом)
alert("1" + 2 + 2) // 122


// типы данных
let a = 0; // integer
let b = "str"; // string
let c = true; // boolean
let d = 34230948920384093842048n // bigint
let e = null // null
let r = 1.1 // float
let u = undefined // undefined
// object
let y = {
    1: 0,
    "str": 2
}

alert(typeof c) // boolean

// if-else c логическими операторами
if (a == 1 && b != "str" || e == null) {
    // some actions
}

// e, если e не равен undefined/null, иначе b
alert(e ?? b) // "str"

// конструкция цикла
for (let i = 1; i < 10; i++) {
    console.log(i)
}

// конструкция while
let j = 3
while (j) {
    console.log(j)
    j--
}

// switch-case
switch (b) {
    case "str":
        alert("it is b")
        break
    case "ert":

    default:
        alert(b)
}

// функция
function showText(text) {
    alert(text)
}

// различные способы достать из html-документа элементы
let labels = document.getElementsByClassName("sign-in-form__label")
let button = document.getElementById("button")
let h1 = document.getElementsByTagName("h1")[0]

// динамическое изменение текста внутри тега h1
for (let i = 0; i < 3; i++) {
    h1.textContent += i
}
