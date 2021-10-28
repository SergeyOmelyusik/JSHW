/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.*/

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/

let date = '2025-12-31';
let newDate = date.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1');
console.log(newDate);

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

let str2 = 'Я учу javascript!';

console.log(str2.substr(2,15));
console.log(str2.substring(2,17));
console.log(str2.slice(2,17));

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i],3);
}

console.log(Math.sqrt(sum));

/*5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/

function getDifference (a,b) {
    let c = Math.abs(a-b);
    console.log(c)
}

getDifference(3,5);
getDifference(6,1);

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).*/

let date2 = new Date();

function getZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

console.log(getZero(date2.getHours()) + ':' + getZero(date2.getMinutes())  + ':' + getZero(date2.getSeconds()) + ' ' + getZero(date2.getDate()) + '.' + getZero(date2.getMonth() + 1) + '.' + date2.getFullYear());

/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'. */

let str3 = 'aa aba abba abbba abca abea',
    regexp = /ab+a/g;

console.log(str3);
console.log(str3.match(regexp));

/* 8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.*/

let phoneNumber = '+375-44 765-03-11';

function validatePhoneNunberl(number) 
    {
        var regexp = /^(\+)?((\d{2,3}))(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}$/;
        
        return regexp.test(number);
    }
    
console.log(phoneNumber, validatePhoneNunberl(phoneNumber));

/* 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.
Функция должна возвращать true или false. Используйте регулярные
выражения.*/

let str4 = 'sergey.omelyusik@mail.ru';

function validateEmail(email) 
    {
        var str = /([A-Za-z0-9_\-\.]{3,})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;
        
        return str.test(email);
    }
    
console.log(str4, validateEmail(str4));
