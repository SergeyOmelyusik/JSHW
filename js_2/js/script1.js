/*Задание 1 

Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.».
*/

let name = prompt ('Введите имя'),
    age= prompt ('Введите возраст'),
    city= prompt ('Введите город'),
    phone= prompt ('Введите телефон'),
    email= prompt ('Введите Email'),
    company= prompt ('Введите название компании');

    document.write('<p class="title">'+ 'Задание № 1 '+'</p>');

if (age <= 20) {
    document.write (`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: телефон: ${phone}, почта: ${email}` + '<br/> <br/>');
} else {
    document.write (`Меня зовут ${name}. Мне ${age} года. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: телефон: ${phone}, почта: ${email}` + '<br/> <br/>');
}

/*Задание 2 

Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.».
*/
let y = 2021 - age;

document.write('<p class="title">'+ 'Задание № 2 '+'</p>');

document.write ( `${name} родился в ${y} году.` + '<br/> <br/>');



