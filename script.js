// const AddBtn = document.querySelector('.btn');
// const InputBtn = document.querySelector('.input');
// const todoList = document.querySelector('.add-todo');
// // const imageBtn = document.querySelector('.img-edite');



// AddBtn.addEventListener('click', ()=>{
//   if(InputBtn.value.trim() !== ""){

//     const taskContainer = document.createElement('div');
//     taskContainer.classList.add('task-item');

//     const imgContainer = document.createElement('div');

//     const para = document.createElement('p');
//     para.textContent = InputBtn.value;

//     const img1 = document.createElement('img')
//     img1.src = "asset/chackBox.png";
//     img1.className = "img-edite";
//     img1.setAttribute('data-action', 'complete');

//     const img2 = document.createElement('img');
//     img2.src = "asset/delete.png";
//     img2.classList.add('img-edite');
//     img2.setAttribute('data-action', 'delete');


//     taskContainer.appendChild(para);
//     imgContainer.appendChild(img1);
//     imgContainer.appendChild(img2);
//     taskContainer.appendChild(imgContainer);
//     // taskContainer.appendChild(img1);
//     // taskContainer.appendChild(img2);

//     todoList.appendChild(taskContainer);

//     // todoList.appendChild(para);
//     // todoList.appendChild(img);
//     InputBtn.value = "";
//   }
// })

// // that is note work

// // imageBtn.addEventListener('click', ()=>{
// //   console.log('code is running wall')
// // })

// todoList.addEventListener('click', (e)=>{
//   if(e.target.classList.contains('img-edite')){
//     // const img = e.target;
//     // const fullDiv = img.parentElement; 

//     // Upgrade here:
//     const action = e.target.getAttribute('data-action');
//     const taskDiv = e.target.closest('.task-item');
//     const text = taskDiv.querySelector('p');

//     if(action === 'complete'){
//       const isUnchackd = e.target.src.includes("chackBox.png")
//       e.target.src = isUnchackd ? "asset/right.avif" : "asset/chackBox.png";
//       text.style.textDecoration = isUnchackd ? 'line-through' : 'none';
//       text.style.color = isUnchackd ? '#00FF00' : '#fff';
//     }

//     if(action === 'delete'){
//       taskDiv.remove();
//     }

//     // const currentFile = img.src.split('/').pop();

//     // // const isChackd = img.src.includes("right.avif");
//     // const isChackd = currentFile === "right.avif";

//     // img.src = isChackd ? "asset/chackBox.png" : "asset/right.avif";
//     // text.style.textDecoration = isChackd ? 'none' : 'line-through';
//     // text.style.color = isChackd ? 'black' : '#00FF00';
//   }
// })


const AddBtn = document.querySelector('.btn');
const InputBtn = document.querySelector('.input');
const todoList = document.querySelector('.add-todo');

AddBtn.addEventListener('click', ()=>{
  if(InputBtn.value.trim() !== '') {
    const taskText = InputBtn.value.trim();

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push({ text: taskText, completed: false });

    localStorage.setItem('tasks', JSON.stringify(tasks))

    runderTasks()

    InputBtn.value = '';
  }
})


function runderTasks(){
  todoList.innerHTML = '';

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

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

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if(action === "complete"){
      tasks[index].completed = !tasks[index].completed
    }

    if(action === 'delete'){
      tasks.splice(index, 1)
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    runderTasks();
  }
})


runderTasks();