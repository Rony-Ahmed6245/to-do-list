const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


addTaskBtn.addEventListener('click',function(){
    const input = taskInput.value ;
    if(input ==''){
        return alert('please input the value')
    }

    const li = document.createElement('li');
    li.innerHTML=`
        ${input}
        <button class="delete">delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';

    li.querySelector('.delete').addEventListener('click',function(){
        taskList.removeChild(li);
    })

})


