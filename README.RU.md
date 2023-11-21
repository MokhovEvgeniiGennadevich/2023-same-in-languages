# Одинаковое в языках программирования

[English](README.md)

JS:
Блочная (if else try catch {})
Глобальная 
Функциональная (funct)

Глобальные
Локальные

?? 
pups  -> A0FF9CB
chups -> A0FF9CB

JS: все примитивы иммутабельны, мутабельны обычные объекты, массивы, функции и тд
Типы данных JS: Inf.
1. Объект
2. Примитивы string number bool null undefined NaN
Иммутабельные
Мутабельные

document.write(
        ("b" + "a" + +"a" + "a").toLowerCase()
      );

      console.log("b" + "a" + +"a" + "a");

number +- 

const Object = {
  // свойство Class
  private protected x: 1

  // Method: OOP Class
  function set
}

Object.x = 2;
Object['x'] = 2;



let foo = "bar"
let bar = foo

pups  A0FF9CB
chups A0FF9CB

Python
let bar = foo.copy()

Что надо сделать во вью чтобы отключить реактивность? 

!==
==!

!=
=!

===
==

<>
>=
<=

Как сравнить 2 объекта у которых свойства не в одинаковом порядке?

[1, "apple", 3] === [1, "apple", 3]
false ? потому что это не приметивы и JS их сравнивает по ссылкам

cmp
compare

Замыкание?

const a = () => {console.log(this)}; a();
Тут мы вырывыемся из функции в движок V8? И нам доступен огромный мир JS'a

this внутри функции помогает вырваться из контекста текущей функции в контекст вызвавшей её функции

defineProperty() ???

...props - это rest оператор, как он работает?
spread ...
name(...rest) {return [...spred]}