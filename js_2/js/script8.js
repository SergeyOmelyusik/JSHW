/*Задание 9

Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно.
*/
let col = prompt('Задание №9 : Введите колисество дней');
col = Number(col);


// Года
let years = col / 365;

document.write('<p class="title">'+ 'Задание № 9 '+'</p>');

document.write ('Введеное количество дней ' + col + '<br/>');

if (years < 1) {
    document.write('Данное количество дней меньше года' + '<br/>');
} else {
    document.write('Данное количество дней = ' + (Math.floor(years* 100) / 100) + ' года' + '<br/>');
}

// Месяца
let mounth = col / 31;

if (mounth < 1) {
    document.write(' Данное количество дней меньше месяца' + '<br/>');
} else {
    document.write('Данное количество дней = ' + (Math.floor(mounth * 100) / 100) + ' месяцев' + '<br/>');
}

// Недели
let weeks = col / 7;

if (weeks < 1) {
    document.write(' Данное количество дней меньше недели' + '<br/>');
} else {
    document.write('Данное количество дней = ' + (Math.floor(weeks * 100) / 100) + ' недель' + '<br/>');
}

// Часы
let hours = col * 24;

    document.write('Данное количество дней = ' + (Math.floor(hours * 100) / 100) + ' часов' + '<br/>');

// Минуты
let minuts = col * 24 * 60;

document.write('Данное количество дней = ' + (Math.floor(minuts * 100) / 100) + ' минут' + '<br/>');

// Секунды

let seconds = minuts * 60;

document.write('Данное количество дней = ' + (Math.floor(seconds * 100) / 100) + ' секунд' + '<br/> <br/>');
