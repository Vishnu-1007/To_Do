



const getTextFromUser = document.getElementById('get_Button');
getTextFromUser.onclick=()=>{
    const getUser =document.getElementById('inputText');
    const getUserEmptyCheck = getUser.value;
    if (getUserEmptyCheck!=''){
        count(i);
    const getUserValue =i+'. '+getUser.value;
    const appendValue = document.createElement('div');
    appendValue.innerText = getUserValue;
    appendValue.className = 'classremove';
    const addTask = document.getElementById('first_div').appendChild(appendValue);
    console.log(addTask);
    addTask.style.display='flex';
    addTask.style.justifyContent='center';
    addTask.style.alignItems='center';
    addTask.style.paddingTop='30px';
    const getDeleteCall = document.getElementById('delete_task');
    getDeleteCall.onclick=()=>{
       // Select the first <div> with the class 'my-class'
       const elementToRemove = document.querySelector('.classremove');

// Check if the element exists and remove it
      if (elementToRemove) {
    elementToRemove.remove();
}


    }
}
}

let i=0;
function count(){
    i++;
}
