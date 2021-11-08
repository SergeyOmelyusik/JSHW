function toDoList() {

    let container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    let header = document.createElement('div');
    header.classList.add('todo_header');
    header.innerHTML = 'ToDoList';
    container.appendChild(header);

    let todoContainer = document.createElement('div');
    todoContainer.classList.add('todo_container');
    container.appendChild(todoContainer);

    let input = document.createElement ('input');
    input.classList.add('todo_input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Type your task...');
    todoContainer.appendChild(input);

    let todoList = document.createElement('div');
    todoList.classList.add('todo_list');
    todoContainer.appendChild(todoList);

    let buttonClear = document.createElement('button');
    buttonClear.classList.add('btn_clear');
    buttonClear.textContent = 'Clear';
    todoContainer.append(buttonClear);


    input.addEventListener('keydown', function(event) {
        let todoElement = document.createElement('div');
            todoElement.classList.add('todo_element');
        
        let todoCheck = document.createElement('div');
            todoCheck.classList.add('todo_check');

        let elementText = document.createElement('p');
            elementText.classList.add('todo_text');

        let btnBlock = document.createElement('div');
        btnBlock.classList.add('btn_block');

        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('btn_delete');
        buttonDelete.textContent = 'Delete';

        let buttonChange = document.createElement('button');
        buttonChange.classList.add('btn_change');
        buttonChange.textContent = 'Change';
 
        if (event.keyCode==13 && input.value !== '') {
            todoList.appendChild(todoElement);
            todoElement.prepend(todoCheck);
            todoElement.appendChild(elementText)
            elementText.textContent = input.value;  
            input.value = '';
            todoElement.appendChild(btnBlock);
            btnBlock.appendChild(buttonChange);
            btnBlock.appendChild(buttonDelete); 
    } 

    buttonDelete.addEventListener('click', function(event){
        todoList.removeChild(todoElement);
    })

    buttonChange.addEventListener('click', function(event){
        let newTask = prompt('Измените задачу');

        if(newTask == '') {
            alert('Ошибка! Вы ввели пустую строку. Изменения не будут применены');
        } else if (newTask == null) {
            alert('Вы отменили изменения');
        } else{
            elementText.textContent = newTask;
        }   
    })

    todoCheck.addEventListener('click', function(event) {
        elementText.classList.toggle('done');
        todoCheck.classList.toggle('done');
    })

    buttonClear.addEventListener('click', function(event){
        todoElement.remove();
    })

    })
  
}

toDoList();
