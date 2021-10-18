document.write('Задание №5 : Выведите чётные числа от 8 до 56. Решить задание через while и for.' + '<br/><br/>');

i=8;
document.write('Цикл WHILE' + '<br/>');
while(i <= 56 ) {
    if(i % 2 == 0) {
        document.write( i + ' ');
    }
    i++;
}

document.write( '<br/>');


document.write('Цикл FOR' + '<br/>');
for(i=8; i <= 56; i++) {
    if(i % 2 == 0) {
        document.write( i + ' ');
    }
}


document.write( '<br/><br/>');