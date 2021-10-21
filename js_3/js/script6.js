document.write('Задание №6 : Необходимо вывести на экран полную таблицу умножения (от 2 до 10)' + '<br/><br/>');

let b = 10;

    for (let j = 1; j <= b; j++){  

        document.write('<br/>')

        for (let i = 1; i <=b; i++)  
        { 
            document.write (` ${i} x ${j} = ` + i*j +'<br/>');
         
        } 

  
}

document.write( '<br/><br/>');