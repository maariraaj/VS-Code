const editBtn=document.createElement('button');
const editBtnText=document.createTextNode('Edit');
editBtn.appendChild(editBtnText);
editBtn.className='edit-btn';

const listItem=document.querySelectorAll('.fruits li');
listItem.forEach(function(item){
    const editButtonClone = editBtn.cloneNode(true);
    const deleteButton = item.querySelector('.delete-btn');
    item.insertBefore(editButtonClone, deleteButton.nextSibling);
})



// Implement the code as in video but with one extra 'Edit' button in 'li'

const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const fruitToAdd=document.getElementById('fruit-to-add');

    const newLi=document.createElement('li');
    const newLiText=document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newLiText);
    newLi.className='fruit';

    const deleteBtn=document.createElement('button');
    const deleteBtnText=document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className='delete-btn';

    newLi.appendChild(deleteBtn);    

    newLi.insertBefore(editBtn, deleteBtn.nextSibling);
    
    fruits.appendChild(newLi);
});
fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete=event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
});