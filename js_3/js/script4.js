document.write('Задание №4 : Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3).' + '<br/><br/>');

let a = 5,
    sum = 0;

for (let i = 1; i <= a; i++) {
   sum = 0;
   
   for (let j = 1; j <= i; j++) {
       sum += j;
   }

   document.write (`Число ${i} = ${sum}` +'<br/>');
}

document.write( '<br/><br/>');