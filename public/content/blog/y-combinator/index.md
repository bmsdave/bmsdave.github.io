---
layout: post
title: "Одна из самых красивых идей в информатике: Y-Combinator"
author: Lucas Fernandes da Costa
date: "2020-01-09"
place: Saint Petersburg, Russia
flag: 🇬🇧
slug: "y-combinator"
language: "ru"
draft: false
cover: "./test.jpg"
showCoverInPost: false
tags: 
    - javascript
    - y-combinator
---


Перевод статьи [Lucas Fernandes da Costa "Y: The Most Beautiful Idea in Computer Science explained in JavaScript"](https://lucasfcosta.com/2018/05/20/Y-The-Most-Beautiful-Idea-in-Computer-Science.html)

В этой статье мы поговорим об **одной из самых красивых идей в информатике: Y-Combinator**. И нет, я не говорю о [венчурной компании в Силиконовой долине](http://www.ycombinator.com/), хотя этот пост объяснит, почему у них такое название ;)

Если говорить простыми словами, **Y-Combinator (также известный как [комбинатор неподвижной точки](https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D1%80_%D0%BD%D0%B5%D0%BF%D0%BE%D0%B4%D0%B2%D0%B8%D0%B6%D0%BD%D0%BE%D0%B9_%D1%82%D0%BE%D1%87%D0%BA%D0%B8))-это способ рекурсии на языке, который явно не поддерживает его**.

Предположим, вы хотите реализовать рекурсивную [функцию вычисления факториала](https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB). В JavaScript, например, вы можете просто сделать так:

```js
const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
```

Но что, если вы не можете использовать никаких «имён»? Что делать, если JavaScript не позволяет вызывать `factorial` внутри `factorial`, как бы вы реализовали тогда рекурсивный вызов?

В этом случае вам на помощь придет `Y-Combinator`.

У него не так много вариантов использования для решения реальных проблем, но это не только одна из самых умопомрачительных идей в компьютерной науке и отличное умственное упражнение, но грань, разделяющая тех, кто действительно понимает, что такое функциональное программирование, от тех, кто еще пока не достиг этого просветления.

Прежде чем мы начнем, я должен предупредить вас, что **вывести Y-Combinator в первый раз может быть трудно**. Поэтому не расстраивайтесь, если вы читаете этот пост более одного раза, чтобы хорошенько разобраться. **Я попытался сделать его очень подробным и показать каждый шаг того, что происходит на каждом примере, но если вы чувствуете, что описание чересчур подробное, просто прочитайте часть "Вывод Y-Combinator"**.

Я рекомендую Вам проверять весь код статьи самостоятельно (например используя nodemon или любой удобной для вас REPL среды), что поможет вам понять все шаги, которые мы пройдем. **Не бойтесь пробовать и тестировать каждый пример. Ваше собственное исследование играет большую роль в понимании того, как Y работает**.

Кроме того, если вы хотите узнать больше о рекурсии [у меня есть очень популярный пост в моем блоге ENG] (https://lucasfcosta.com/2017/05/08/All-About-Recursion-PTC-TCO-and-STC-in-JavaScript.html) Он немного старый, но остается достаточно информативным.

Я гарантирую вам, что **это будет одно из самых удивительных путешествий в функциональное программирование**. Первый раз, вывод Y-Combinator является неописуемой радостью, так что устраивайтесь в кресле поудобнее и давайте начнем.

<br>

## **Прежде всего: что такое combinator?**

**Комбинатор — это функция без свободных переменных**.

**Свободные переменные — это переменные, определенные вне области видимости функции**. Они противоположны связанным переменным, которые существуют только внутри области видимости функции.

Давайте используем пример, чтобы было легче понять:

```js
const num = 13;

const sumPlusThirteen = (a, b) => a + b + num;
```

В приведенном выше примере, `sumPlusThirteen`  использует переменными `a`, `b` и `num`. **Переменные `a` и `b` являются связанными переменными, потому что они привязаны к параметрам функции**: когда мы ссылаемся на их имена, мы имеем в виду значения, которые были переданы функции `sumPlusThirteen`. Однако **переменная `num` ссылается на значение вне области видимости функции, что означает, что это свободная переменная**.

Давайте рассмотрим еще несколько примеров:

1. `x => x` - `x` является связанной переменной, так как она привязана к параметрам функции
2. `x => x + y` - `x` — связанная переменная, так как она привязана к параметрам функции, а `y` — свободная переменная, так как она ссылается на значение вне области видимости функции
3. `x => y + z` - `y` и `z` являются свободными переменными, так как они ссылаются на значения вне контекста функции
4. `(x, y) = > x + y` — оба `x` и `y` являются связанными переменными, так как они привязаны к параметрам функции.

Возвращаясь к комбинаторам, теперь мы можем сказать, что все комбинаторы являются следующими функциями:

1. `x => x` является комбинатором, потому что `x` является единственной переменной в теле функции и привязана к параметрам функции
2. `(x, y) => y` — комбинатор, так как единственная переменная в его теле (`y`) привязана к параметрам функции.
4. `x => y` — не является комбинатором, потому что переменная в его теле (`y`) относится к чему-то вне контекста функции
5. `(x, y) => x(y(z))` не является комбинатором, потому что одна из переменных в его теле (`z`) относится к чему-то вне контекста функции.

Я мог бы написать об этом целый пост в блоге, но пока этих базовых знаний будет достаточно. Я настоятельно рекомендую вам узнать больше о [разнице между связанными и свободными переменными ENG](https://stackoverflow.com/questions/21855838/what-are-free-and-bound-variables) и [что такое pass-by-name и с чем его едят ENG](https://stackoverflow.com/questions/838079/what-is-pass-by-name-and-how-does-it-work-exactly).

<br>

## **Получение Y**

### Итак, что для этого нужно?

Теперь, когда мы знаем, что такое комбинатор, давайте перейдем к самой смешной части этого поста и выведем сам Y-комбинатор.

Давайте вернёмся к нашему рекурсивному определению факториала:

```js
const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

console.log(factorial(5)); // 120
```

Как Вы помните, **мы хотим найти способ получения факториала без ссылки на собственное имя. Мы хотим функцию, которая не имеет свободных переменных, но все еще рекурсивна**.

Учитывая эту цель, наиболее очевидным здесь было бы **исключить вызов `factorial` внутри тела функции**. Чтобы сделать это, мы сделаем один из самых простых и распространенных методов рефакторинга в функциональном программировании: мы удалим ссылку `factorial` из тела функции и сделаем ее параметром:

```js
const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);
```

Теперь, для того, чтобы вычислить факториал числа, мы должны передать функцию `f` в `factorialGenerator`, чтобы он мог вызвать ее с `n-1`, Когда `n` не `0`. Например, если бы Вы передали функцию `myFun`, вы бы получили обратно `n => n === 0 ? 1 : n * myFun(n - 1)`.

Давайте посмотрим, что произойдет, если мы вызовем эту функцию с рандомной функцией и передадим `0`:

```js
const literallyAnyFunction = () => null
const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

console.log(factorialGenerator(literallyAnyFunction)(0)); // 1
```

Посмотрите, это уже работает для `0`! И мы можем использовать `literallyAnyFunction` для этого! Разве это не удивительно? :)

Это происходит потому, что при передаче нуля в функцию, возвращаемую `factorialGenerator`, `n` будет равно `0`, а затем он вернет `1`. Нам даже не нужно будет вызывать функцию, которую мы передали (`literallyAnyFunction`).

Но что если мы попытаемся вычислить факториал числа `1` таким же образом?

```js
const literallyAnyFunction = () => 'a string'
const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

console.log(factorialGenerator(literallyAnyFunction)(1)); // NaN
```

Возможно, вы захотите возразить: "но ведь мы хотим получить факториал от 1, `NaN` нам абсолютно не нужен!"

Чтобы понять, что произошло, давайте посмотрим на функцию, возвращаемую вызовом `factorialGenerator` и передачей ей `literallyAnyFunction`:
```js
const literallyAnyFunction = () => 'a string'
const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const fn = factorialGenerator(literallyAnyFunction);
// fn is: n => n === 0 ? 1 : n * (() => 'a string')(n - 1));
```

Как видите, в функции возвращаемое `factorialGenerator(literallyAnyFunction)`, если `n` не `0` придется вызывать `literallyAnyFunction` с `n - 1`, а затем умножить результат на `n`. И каков результат умножения строки на число в JavaScript? Именно, это `NaN`.

Хорошо, но что, если попытаться вычислить факториал `2` также используя `factorialGenerator(literallyAnyFunction)`? Это сработает?

```js
const literallyAnyFunction = () => 'a string'
const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

console.log(factorialGenerator(literallyAnyFunction)(2)); // NaN
```

Конечно, нет. Это все еще `NaN`. Но это не то, что я хочу показать тебе, мой дорогой читатель, на этот раз. Что я хочу заострить внимание на том, что `literallyAnyFunction` вызывается только один раз.

Вот что произошло:

1. `factorialGenerator` был назван с literallyAnyFunction и возвращенная функция.
2. Эта функция была вызвана с помощью `2`
3. `2` не равен `0`, поэтому мы будем делать `2 * literallyAnyFunction(2 - 1)`
4. `literallyAnyFunction(2 - 1)` возвращает `строка"
5. Мы попытаемся умножить `a string` на `2` и получаем `NaN`.

Как я уже сказал, был только один вызов `literallyAnyFunction`.

Давайте сделаем это более очевидным, добавив `console.log` в `literallyAnyFunction`:
```js
const literallyAnyFunction = () => {
    console.log('f has been called!')
    return 'a string'
}

const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

console.log(factorialGenerator(literallyAnyFunction)(2));
```

Видите? `literallyAnyFunction` был вызван только один раз. Теперь проверьте его снова с `0`, `1` и `2`. Что происходит?

* Для `0` возвращает  `1`, что является правильным ответом и не вызывает `literallyAnyFunction` вообще.
* Для `1` и `2` возвращает `NaN`, так как была вызвана `literallyAnyFunction` и произошло умножение строки на число.

Вы заметили какую-нибудь закономерность? Всякий раз, когда мы вызываем `literallyAnyFunction` и умножаем число на строку, которая возвращается, мы получаем `NaN`. Эх.. Если бы только у нас был способ этого избежать...

Ну, он на самом деле есть!

Если мы вызываем `factorialGenerator` с `factorialGenerator(literallyAnyFunction)` первоначально `f` будет являться `factorialGenerator`, что означает, что мы называем `factorialGenerator` с `n - 1` вместо `literallyAnyFunction`.

Смотри!

```js
const literallyAnyFunction = () => {
    console.log('f has been called!')
    return 'a string'
}

const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const result = factorialGenerator(
    factorialGenerator(literallyAnyFunction)
)(1);

// Работает!
console.log(result); // 1
```

Потрясающе, это работает! Но что же произошло?

1. На первом шаге мы определим `factorialGenerator(literallyAnyFunction)` которая вернет функцию, которая возвращает `1` (если переданный ей аргумент `0`), иначе вызовет `literallyAnyFunction`.
2. Затем мы снова вызываем. `factorialGenerator` с помощью только что возвращенной функции.
3. Наконец, функция, которую мы получили, будет вызывать `factorialGenerator` при первом обращении к `f`. После этого он вызовет `literallyAnyFunction`.
4. Если  это `1`, он видит, что `1` не равен `0`, чтобы вызывать `f` (который `factorialGenerator`) с `n - 1` (aka `0`) и умножит результат на `1`.
5. Теперь, когда `factorialGenerator` был вызван с `0`, то `n` равен `0` и вернется `1`. Это `1` будет умножено на `1`, возвращая `1`, который является правильным ответом.

**Заметим, что `literallyAnyFunction` не вызывался вообще.**

Если понимание рекурсии дается сложно, еще раз рекомендую прочитать [эту статью в блоге, где я объясняю, как простым способом понять рекурсию] (https://lucasfcosta.com/2017/05/08/All-About-Recursion-PTC-TCO-and-STC-in-JavaScript.html), а затем вернуться сюда.

Другой вопрос: будет ли эта техника работать и с `2`?

```js
const literallyAnyFunction = () => {
    console.log('f has been called!')
    return 'a string'
}

const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const result = factorialGenerator(
    factorialGenerator(literallyAnyFunction)
)(2);

console.log(result); // NaN
```

Очевидно что нет!

Как вы можете видеть, на этот раз, `literallyAnyFunction` было названа, потому что второй вызов `f` вызвал `literallyAnyFunction`. Как мы можем этого избежать с `2`? Легко, просто добавить `factorialGenerator`.

```js
const literallyAnyFunction = () => {
    console.log('f has been called!')
    return 'a string'
}

const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const result = factorialGenerator(
    factorialGenerator(
        factorialGenerator(literallyAnyFunction)
    )
)(2);

console.log(result); // 2
```

Теперь работает! Это происходит потому, что мы не вызываем `literallyAnyFunction`, вместо этого, мы просто продолжаем вызывать `factorialGenerator` пока не достигнем `0`, а потом результат пузырем выталкиваем наверх, как и в предыдущем примере.

Вот что произошло на этот раз:

```js
const literallyAnyFunction = () => {
    console.log('f has been called!')
    return 'a string'
}

const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const result = factorialGenerator(
    factorialGenerator(
        factorialGenerator(literallyAnyFunction)
    )
)(2);

//  n => 2 === 0 ? 1 : 2 * factorialGenerator(2 - 1)
//  n => 1 === 0 ? 1 : 1 * factorialGenerator(1 - 1)
//  n => 0 === 0 ? 1 : 0 * literallyAnyFunction(0 - 1) - literallyAnyFunction won't be called!

console.log(result); // 2

```

Хотите заставить работать с `3`? Легко, просто добавьте еще один вызов `factorialGenerator`:

```js
const literallyAnyFunction = () => {
    console.log('f has been called!')
    return 'a string'
}

const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const result = factorialGenerator(
    factorialGenerator(
        factorialGenerator(
            factorialGenerator(literallyAnyFunction)
        )
    )
)(3);

console.log(result); // 6
```

А что насчет `4`? Все в том же духе:

```js
const literallyAnyFunction = () => {
    console.log('f has been called!')
    return 'a string'
}

const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const result = factorialGenerator(
    factorialGenerator(
        factorialGenerator(
            factorialGenerator(
                factorialGenerator(literallyAnyFunction)
            )
        )
    )
)(4);

console.log(result); // 24
```

Возможно вам кажется что мы переходим на LISP. Но есть один важный момент.
Эти примеры показывают, что для того, чтобы иметь возможность вычислить факториал любого числа, нам просто нужно иметь бесконечную цепочку вызовов `factorialGenerator`, передаваемых друг другу:

```js
const literallyAnyFunction = () => {
    console.log('f has been called!')
    return 'a string'
}

const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const factorial = factorialGenerator(
    factorialGenerator(
        factorialGenerator(
            factorialGenerator(...)
        )
    )
);
```

<br>

### Неподвижная точка

Теперь остановимся на минутку на другом очень важном понятии для понимания Y: **неподвижная точка**.

**Неподвижной точкой функции является то значение, которое при применении к ней приводит к самой себе.** В принципе, **если вы вызываете функцию `f` с `fixpoint`, на выходе вы получите `fixpoint`**.

Возьмите калькулятор, введите любое число и просто продолжайте нажимать `cos`, до того момента пока результат не будет изменяться. Давайте я попробую отгадать это число. Хм.. Я думаю.. Это будет примерно... `0.7390851332151607`!
Это означает, что `0.7390851332151607` - это неподвижная точка `cos` и если мы вызовем `cos(0.7390851332151607)` мы вернемся к `0.7390851332151607`.

Подведем итог в одном выражении:

```js
f(fixpoint) = fixpoint
```

Как видите, `f(fixpoint)` это то же самое что и `fixpoint`, в таком случае мы можем просто заменить `fixpoint` внутри `f` на  `f(fixpoint)`, вот так вот:

```js
fixpoint = f(fixpoint)
fixpoint = f(f(fixpoint))
fixpoint = f(f(f(fixpoint)))
fixpoint = f(f(f(f(fixpoint))))
fixpoint = f(f(f(f(f(fixpoint)))))
// Мы можем продолжать вечно...
```

Выглядит знакомо, не правда ли? И это именно то, что мы хотим! Мы хотим иметь возможность вкладывать бесконечные вызовы ` factorialGenerator` внутрь себя всякий раз, когда нам нужно сделать рекурсию.

Вот почему мы хотим найти Y combinator. Y Combinator - это комбинатор, который позволяет нам найти фиксированную точку функции, такой как `factorialGenerator`, чтобы мы могли сделать ее рекурсивной!

<br>

### Поиск Y

При применении функции к Y мы хотим, чтобы она возвращала фиксированную точку этой функции, например:

```js
Y(f) = fixpoint
```

Учитывая то, что `fixpoint` функции `f` является значением, которое при применении к ней `f` вернет `fixpoint`, мы также можем сказать, что:

```js
Y(f) = fixpoint
Y(f) = f(fixpoint)
```

Теперь, если мы просто заменим fixpoint внутри второго выражения, мы получим:

```js
Y(f) = f(Y(f))
```

Это и является определением `Y`! Итак, давайте определим функцию `Y`, просто взяв `f` в качестве аргумента, а не применяя его к `Y`:

```js
const Y = f => f(Y(f))
```

Теперь, мы должны вызвать `Y` передавая `factorialGenerator` и получим `factorial`. Это будет выглядеть так:

```js
const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const Y = f => f(Y(f));

const factorial = Y(factorialGenerator);

console.log(factorial(5));
```

Пока что это не работает. Если вы попытаетесь выполнить приведенный выше фрагмент кода, произойдет:

```
RangeError: Maximum call stack size exceeded
    at Y (repl:1:11)
    at Y (repl:1:18)
    at Y (repl:1:18)
    at Y (repl:1:18)
    at Y (repl:1:18)
    at Y (repl:1:18)
    at Y (repl:1:18)
    at Y (repl:1:18)
    at Y (repl:1:18)
    at Y (repl:1:18)
```

Вы получите переполнение стека, потому что `Y` вызывает себя бесконечно. Если вы остановитесь и замените `Y(f)` в теле этой функции на ее результат, это станет очевидным:

```js
const Y = f => f(Y(f));

//  Вот что происходит, когда мы применяем `f` к нему:
// Y(f) = f(Y(f));

// Это означает, что мы можем заменить каждый `Y(f)` на `f(Y(f))`
// = f(Y(f));
// = f(f(Y(f)));
// = f(f(f(Y(f))));
// И так далее...
```

На самом деле, это определение будет работать в языках со слабой типизацией (aka [`non-strict`](https://en.wikipedia.org/wiki/Strict_programming_language)), потому что нам не нужно было бы мгновенно выполнять `Y(f)` в теле `Y`, вместо этого мы выполнили бы его только тогда, когда это необходимо. Это означает, что вместо того, чтобы бесконечно делать эту "замену", которую мы только что сделали, мы вернем функцию, возвращенную `f`, причем `Y(f)` является первым аргументом, который он принимает (без необходимости его выполнения).

Итак, чтобы перевести это на JavaScript, нам нужно будет отложить выполнение `Y(f)`, чтобы оно не вызывалось сразу, когда мы передаем функцию `Y`.

И каков самый простой способ отложить выполнение функции в `JavaScript`?

thunk! [Thunk-это функция, которая обертывает выражение для задержки его вычисления](https://github.com/reduxjs/redux-thunk#whats-a-thunk).

```js
// вычисление 1 + 2 выполняется немедленно
// x === 3
let x = 1 + 2;

// вычисление 1 + 2 откладывается
// foo можно вызвать позже для выполнения вычисления
// foo - это thunk!
let foo = () => 1 + 2;
```

Я думаю, что те кто использует redux c этим знакомы, не так ли?. Действительно, [это именно то, для чего был сделан redux-thunk](https://github.com/reduxjs/redux-thunk#motivation). Фактически, [сам пример выше был взят из их README](https://github.com/reduxjs/redux-thunk#whats-a-thunk).

Теперь, когда мы знаем, что такое thunk, давайте отложим выполнение `f(Y(f))`, обернув его в функцию:

```js
const Y = f => x => f(Y(f))(x);
```

Поскольку функция, возвращаемая `factorialGenerator`, будет принимать только один аргумент в качестве параметра, то можно просто обернуть его в функцию, которая принимает один аргумент и применяет его к результату `f(Y(f))`, который теперь будет функция, которая принимает один аргумент, вместо бесконечного вычисления.

Давайте сделаем это более очевидным, представив, что происходит, когда мы вызываем `Y` с `factorialGenerator`, а затем применяем к нему `5`:

```js
const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const Y = f => x => f(Y(f))(x);

const factorial = Y(factorialGenerator);

console.log(factorial(5));
```

1. Поскольку Y возвращает функцию, которая принимает один аргумент, мы получим функцию в ее теле, которая является `x => f(Y(f))(x)`.
    В этой функции мы сможем заменить все `f` на `factorialGenerator`:
    `x => factorialGenerator(Y(factorialGenerator))(x)`
    Хитрость здесь в том, что, поскольку все все еще обернуто в функцию, которая принимает `x` в качестве аргумента, мы будем вычислять ее только тогда, когда передадим `x` в эту функцию.
2. Еще один момент, отметим, что `factorialGenerator(Y(factorialGenerator))` примет то, что вернет `Y(factorialGenerator)`, но не будет выполнять до того, как мы не передадим аргумент (`х`) в нее.
    Он будет в основном возвращать это `n => n === 0 ? 1 : n * Y(factorialGenerator)(n - 1)`.
3. Делаем ещё один шаг, начиная с `Y(factorialGenerator)` равен `x => factorialGenerator(Y(factorialGenerator))(x)` (как мы видели на Шаг 1), мы получим: `n => n === 0 ? 1 : n * (x => factorialGenerator(Y(factorialGenerator)))(n - 1)`
4. Наконец, мы можем вызвать функцию на предыдущем шаге, например, со значением `5`.
    Это вызовет функцию в теле `factorialGenerator` с `n` заменённым на `5`, и `f` будет результатом `Y(factorialGenerator)`, который является точно такой же функцией как мы имели на Шаг 1.
    Затем мы вызываем функцию на Шаге 2 `5 - 1`:
    `5 === 0 ? 1 : 5 * (x => factorialGenerator(Y(factorialGenerator)))(5 - 1)`.
5. Этот процесс будет повторяться до тех пор, пока мы больше не вызовем функцию на шаге 1, но вернем 1, потому что `n` достигло 0, в результате чего умножение запустится и вернет конечный результат.

**И это, друзья мои, само определение Y, но это еще не Y *combinator* **.

Как вы помните, для того, чтобы он был комбинатором, у нас не должно быть свободных переменных в его теле, но в этом случае у нас есть явный вызов `Y`.

<br>

### Поиск Y Combinator

Есть много способов получить комбинатор Y, но я думаю, что самый простой для большинства людей — это, безусловно, перейти от функции `factorial` к Y вместо использования математических выражений.

Как вы помните, сначала у нас была явно рекурсивная функция вычисления факториал, которая выглядела следующим образом:

```js
const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
```

Затем, чтобы удалить явную рекурсию, мы сделали явный рекурсивный вызов `factorial` аргументом этой функции:

```js
const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);
```

Теперь `factorialGenerator` больше не является явно рекурсивным, вместо этого он вызывает переданную ему функцию `f`. Пока `f` внутри него является функцией, возвращаемой `factorialGenerator`, мы сможем вычислять факториалы, так как мы будем продолжать вызывать внутреннюю функцию: `n => n === 0 ? 1: n * f (n - 1)`.

Но как мы можем сделать так, чтобы `factorialGenerator` всегда вызывал внутреннюю функцию?

Мы можем заставить `f` вызвать себя внутри его тела:

```js
const factorialRecursive = f => n => n === 0 ? 1 : n * f(f)(n - 1);

const factorial = factorialRecursive(factorialRecursive);

console.log(factorial(5)); // 120
```

И это работает! Это потому что когда  мы вызываем `factorialRecursive` в первый раз мы возвращаем:

```js
n => n === 0 ? 1 : n * factorialRecursive(factorialRecursive)(n - 1);
```

А затем, например, при вызове его с помощью `5`, мы вызовем точно такую же функцию: `factorialRecursive(factorialRecursive)`, которая, как вы можете видеть выше, является тем же самым определением `factorial` (и, следовательно, возвращает то же самое).

Это означает, что он будет продолжать вызывать `factorialRecursive(factorialRecursive)` (который является, по сути, `factorial`) пока `n` не достигнет `0`, потом вернёт `1` и позволит нам вычислить факториал числа. Примерно так:

```js
const factorialRecursive = f => n => n === 0 ? 1 : n * f(f)(n - 1);

const factorial = factorialRecursive(factorialRecursive);

// factorial is: n => n === 0 ? 1 : n * factorialRecursive(factorialRecursive)(n - 1);

console.log(factorial(5)); // 120

// n => 5 === 0 ? 1 : 5 * factorialRecursive(factorialRecursive)(5 - 1);

// n => 4 === 0 ? 1 : 4 * factorialRecursive(factorialRecursive)(4 - 1);

// n => 3 === 0 ? 1 : 3 * factorialRecursive(factorialRecursive)(3 - 1);

// n => 2 === 0 ? 1 : 2 * factorialRecursive(factorialRecursive)(2 - 1);

// n => 1 === 0 ? 1 : 1 * factorialRecursive(factorialRecursive)(1 - 1);

// n => 0 === 0 ? 1 : 0 * factorialRecursive(factorialRecursive)(0 - 1); // returns 1

// Notice that you can replace all the `factorialRecursive(factorialRecursive)` occurrences
// above for `factorial`, because they are the same thing.
```

Имейте в виду, что наша цель — сделать этот процесс достаточно общим, чтобы мы могли заставить его работать для любой функции, которую мы хотим сделать рекурсивным, поэтому давайте удалим `f(f)`, чтобы мы могли вернуть `factorialGenerator` и извлечь его в ближайшем будущем.

Сделать его аргументом этой функции и передать его внутрь через [немедленно вызываемую функцию](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) как мы собираемся это сделать:

```js
const factorialRecursive = myFun => (f => n => n === 0 ? 1 : n * f(n - 1))(myFun(myFun));

const factorial = factorialRecursive(factorialRecursive)

console.log(factorial(5)); // RangeError: Maximum call stack size exceeded
```

Переполнение Стека! Почему так произошло? Это произошло потому, что `myFun(myFun)` - это первое, что нужно оценить, в результате чего `factorialRecursive` продолжает вызывать себя бесконечно.

Помните, как проще всего отложить выполнение функции? Точно, оберните его в другую функцию.

```js
const factorialRecursive = myFun => (f => n => n === 0 ? 1 : n * f(n - 1))((x) => myFun(myFun)(x));

const factorial = factorialRecursive(factorialRecursive)

console.log(factorial(5)); // 120
```

Круто, похоже мы снова на правильном пути. Теперь мы будем оценивать только `myFun (myFun)` каждый раз, когда передаем `x`.

Кроме того, переименование `myFun` в `g` может упростить чтение:

```js
const factorialRecursive = g => (f => n => n === 0 ? 1 : n * f(n - 1))((x) => g(g)(x));

const factorial = factorialRecursive(factorialRecursive)

console.log(factorial(5)); // 120
```

Самое классное, что теперь нам даже не нужно определять факториал как `factorialRecursive(factorialRecursive)`, мы можем просто скопировать и вставить его, заставляя его вызывать себя в том же определении, как это:

```js
const factorial = (
    g => (f => n => n === 0 ? 1 : n * f(n - 1))((x) => g(g)(x)) // функция
)(g => (f => n => n === 0 ? 1 : n * f(n - 1))((x) => g(g)(x))); // сам снова в качестве аргумента

console.log(factorial(5)); // 120
```

Я думаю, мы все можем согласиться с тем, что просто копирование и вставка этой функции немного уродливы, так почему бы нам не создать функцию, которая берет функцию и вызывает ее сама с собой и использует ее?

```js
// `g => g(g)` - функция, которая берет функцию и вызывает ее сама с собой
const factorial = (g => g(g))(g => (f => n => n === 0 ? 1 : n * f(n - 1))((x) => g(g)(x)))

console.log(factorial(5)); // 120
```

Намного лучше!

Наконец, мы можем извлечь само определение `factorialGenerator` (`f => n => n === 0 ? 1: n * f (n - 1)`) мы попали в тело `factorial` и передаем его в качестве аргумента, чтобы сделать эту функцию универсальной:

```js
const factorialGenerator = f => n => n === 0 ? 1 : n * f(n - 1);

const yCombinator = f => (g => g(g))(g => f((x) => g(g)(x)))

const factorial = yCombinator(factorialGenerator);

console.log(factorial(5)); // 120
```

**Это Y-Combinator!**


<br>

## Применение его к другим рекурсивным функциям

**Наш Y-комбинатор работает с любой неявно рекурсивной функцией, которая принимает один аргумент**.

**Давайте посмотрим, как это работает для функции вычисления чисел [Фибоначчи](https://en.wikipedia.org/wiki/Fibonacci_number)**.

Начнем с определения самой функции `fibonacci`. Она возвращает число Фибоначчи по определенному индексу `n`.

```js
const fibonacci = n => n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
```

Теперь давайте исключим явную рекурсию, удалив явные вызовы `fibonacci` и сделав его аргументом:

```js
const fibonacciGenerator = f => n => n <= 1 ? 1 : f(n - 1) + f(n - 2);
```

Наконец, если мы передадим `fibonacciGenerator` нашему `Y-комбинатору`, мы получим рекурсивную функцию Фибоначчи:

```js
const fibonacciGenerator = f => n => n <= 1 ? 1 : f(n - 1) + f(n - 2);

const yCombinator = f => (g => g(g))(g => f((x) => g(g)(x)))

const fibonacci = yCombinator(fibonacciGenerator)

console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 2
console.log(fibonacci(3)); // 3
console.log(fibonacci(4)); // 5
console.log(fibonacci(5)); // 8
```


<br>

## Фирма в кремниевой долине

Сам Пол Грэм известен своей удивительной работой на lisp, так что он, очевидно, очень опытный, когда дело доходит до функционального программирования и, следовательно, знает Y-Combinator.

Согласно собственному веб-сайту YC, именно поэтому они выбрали имя:

> Y Combinator - одна из самых крутых идей в области компьютерных наук. Это также метафора того, что мы делаем. Это программа, которая запускает программы; мы компания, которая помогает начать компании.

Теперь, когда мы немного знаем о Y, мы можем исследовать значение этого имени немного больше.

Учитывая, что YC ускоряет стартапы, можно сказать, что:

<center><p style="font-size: 22px; font-style: italic;">YC(accelerateStartups)(startup)</p></center>

И до тех пор, пока `accelerateStartups` не достигнет своего базового условия (либо из-за нехватки денег, либо мотивации), мы будем продолжать кормить его все большим и большим количеством стартапов.

Отличная работа, мистер Грэм. Я ваш большой поклонник.

<br>

## Связанные материалы и ссылки

* [Y Combinator или как добиться успеха в рекурсии без рекурсии](https://mvanier.livejournal.com/2897.html) by [Mike Vanier](http://users.cms.caltech.edu / ~mvanier/) - это один из лучших постов в блоге, которые я читал в своей жизни. Это сообщение в блоге пытается следовать тому же дидактическому маршруту, что и этот, но с немного большей детализацией и более медленными темпами. Если вы заинтересованы в более подробной информации о том, как получить Y в нестрогих языках программирования, я настоятельно рекомендую вам прочитать это. Отличный материал, спасибо, Майк.
* [Лямбда-исчисление: у комбинатора в JavaScript](https://github.com/calincru/Y-Combinator) по [Yehonathan Sharvit](https://twitter.com/viebel) - еще один отличный блоге в JavaScript. Больше внимания уделяется практическому и короткому выводу y-комбинатора и его практическим приложениям
* [Основы: комбинатор Y функционального программирования](https://www.youtube.com/watch?v=9T8A89jgeTI) by [компьютерный файл](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA) - обычно я не смотрю много видео на Youtube о компьютерных науках, но это определенно стоит вашего времени. Это очень простое объяснение, которое поможет вам понять теоретическую сторону y-комбинатора, если вы никогда раньше не имели дело с лямбда-исчислением. Это хорошая отправная точка.
* [Четкий, интуитивно понятный вывод комбинатора с фиксированной точкой (Y Combinator)?](https://cs.stackexchange.com/questions/9604/clear-intuitive-derivation-of-the-fixed-point-combinator-y-combinator) на [CS StackExchange](https://cs.stackexchange.com/) - также очень хороший и простой вывод Y. не практичный, но определенно очень элегантный и лаконичный. Настоятельно рекомендуемый.
* [thunks / thunks на Github](https://github.com/thunks/thunks) & [redux-thunk](https://github.com/reduxjs/redux-thunk) - более отличные ресурсы, чтобы узнать о thunks и как они могут быть полезны


<br>

## Особая благодарность

* Я бы хотел поблагодарить моего друга [Morgan Roderick](https://twitter.com/mrgnrdrck) за ревью этой статьи и за все удивительные работы, которые он делает с Sinon.js. Спасибо, приятель :)