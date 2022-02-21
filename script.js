//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event Listeners

todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);


//functions

function addTodo(event) {
    event.preventDefault();


    //create element in Html
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    // add element  in  todoDiv 
    todoDiv.appendChild(newTodo);

    //mark
    const complateButton = document.createElement('button');
    complateButton.innerHTML = '<span  class = "check" > mark </span>'
    complateButton.classList.add("complate-btn");
    todoDiv.appendChild(complateButton);



    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i  class = "trush" > delete </i>';
    trashButton.classList.add("trush-btn");
    todoDiv.appendChild(trashButton);



    //append to list

    todoList.appendChild(todoDiv);


    //clear Todoinput value 
    todoInput.value = "";

}



function deleteCheck(e) {
    const item = e.target;

    console.log(item.classList);
    //delete TODO 

    if (item.classList[0] === 'trush-btn') {

        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.remove();
    }


    //checkmark

    if (item.classList[0] === 'complate-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('complate');
    }


};