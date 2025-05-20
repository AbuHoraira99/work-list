const AddBtn = document.querySelector('.btn');
const InputBtn = document.querySelector('.input');
const todoList = document.querySelector('.add-todo');
// const imageBtn = document.querySelector('.img-edite');



AddBtn.addEventListener('click', ()=>{
  if(InputBtn.value.trim() !== ""){

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-item');

    const imgContainer = document.createElement('div');

    const para = document.createElement('p');
    para.textContent = InputBtn.value;

    const img1 = document.createElement('img')
    img1.src = "asset/chackBox.png";
    img1.className = "img-edite";
    img1.setAttribute('data-action', 'complete');

    const img2 = document.createElement('img');
    img2.src = "asset/delete.png";
    img2.classList.add('img-edite');
    img2.setAttribute('data-action', 'delete');


    taskContainer.appendChild(para);
    imgContainer.appendChild(img1);
    imgContainer.appendChild(img2);
    taskContainer.appendChild(imgContainer);
    // taskContainer.appendChild(img1);
    // taskContainer.appendChild(img2);

    todoList.appendChild(taskContainer);

    // todoList.appendChild(para);
    // todoList.appendChild(img);
    InputBtn.value = "";
  }
})

// that is note work

// imageBtn.addEventListener('click', ()=>{
//   console.log('code is running wall')
// })

todoList.addEventListener('click', (e)=>{
  if(e.target.classList.contains('img-edite')){
    // const img = e.target;
    // const fullDiv = img.parentElement; 

    // Upgrade here:
    const action = e.target.getAttribute('data-action');
    const taskDiv = e.target.closest('.task-item');
    const text = taskDiv.querySelector('p');

    if(action === 'complete'){
      const isUnchackd = e.target.src.includes("chackBox.png")
      e.target.src = isUnchackd ? "asset/right.avif" : "asset/chackBox.png";
      text.style.textDecoration = isUnchackd ? 'line-through' : 'none';
      text.style.color = isUnchackd ? '#00FF00' : '#fff';
    }

    if(action === 'delete'){
      taskDiv.remove();
    }

    // const currentFile = img.src.split('/').pop();

    // // const isChackd = img.src.includes("right.avif");
    // const isChackd = currentFile === "right.avif";

    // img.src = isChackd ? "asset/chackBox.png" : "asset/right.avif";
    // text.style.textDecoration = isChackd ? 'none' : 'line-through';
    // text.style.color = isChackd ? 'black' : '#00FF00';
  }
})
