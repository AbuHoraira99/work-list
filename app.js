const AddBtn = document.querySelector('.btn');
const InputBtn = document.querySelector('.input');
const todoList = document.querySelector('.add-todo');


function getTask(){
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTask(tasks){
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

AddBtn.addEventListener('click', ()=>{
  if(InputBtn.value.trim() !== '') {
    const taskText = InputBtn.value.trim();

    // let tasks = JSON.parse(localStorage.getItem('
    let tasks = getTask()

    tasks.push({ text: taskText, completed: false });

    // localStorage.setItem('tasks', JSON.stringif
    saveTask(tasks);

    runderTasks()

    InputBtn.value = '';
  }
})


function runderTasks(){
  todoList.innerHTML = '';

  // let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let tasks = getTask()

  tasks.forEach((task, index) =>{
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-item');
    taskContainer.setAttribute('data-index', index);

    const imgContainer = document.createElement('div');

    const para = document.createElement('p')
    para.textContent = task.text;
    para.style.textDecoration = task.completed ? 'line-through' : 'none';
    para.style.color = task.completed ? '#00FF00' : '#fff';


    const img1 = document.createElement('img');
    img1.src = task.completed ? "asset/right.avif" : "asset/chackBox.png";
    img1.className = 'img-edite';
    img1.setAttribute('data-action', 'complete');

    const img2 = document.createElement('img');
    img2.src = "asset/delete.png";
    img2.className = 'img-edite';
    img2.setAttribute('data-action', 'delete');


    imgContainer.appendChild(img1);
    imgContainer.appendChild(img2);

    taskContainer.appendChild(para);
    taskContainer.appendChild(imgContainer);

    todoList.appendChild(taskContainer);
  })

}

todoList.addEventListener('click', (e)=>{
  if(e.target.classList.contains('img-edite')){
    const action = e.target.getAttribute('data-action');
    const textDiv = e.target.closest('.task-item');
    const index = textDiv.getAttribute('data-index');

    // let tasks = JSON.parse(localStorage.getItem('tasks
    let tasks = getTask()

    if(action === "complete"){
      tasks[index].completed = !tasks[index].completed;
    }

    if(action === 'delete'){
      tasks.splice(index, 1);
    }

    // localStorage.setItem('tasks', JSON.stringify(tasks));
    saveTask(tasks)
    runderTasks();
  }
})


runderTasks();