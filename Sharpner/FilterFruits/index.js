const descripInput=document.createElement('input');
descripInput.type = 'text';
descripInput.id = 'description';

const formItems=document.getElementsByTagName("form")[0];
const addFruits=document.getElementById('fruit-to-add');
formItems.insertBefore(descripInput, formItems.lastElementChild);

const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const fruitToAdd=document.getElementById('fruit-to-add');

    const newLi=document.createElement('li');
    const newLiText=document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newLiText);
    newLi.className='fruit';

    const descripToAdd=document.getElementById('description');
    const newPara=document.createElement('p');
    const newParaText=document.createTextNode(descripToAdd.value);
    newPara.appendChild(newParaText);
    newPara.id='desrip';
    newPara.style.fontStyle='italic';

    const deleteBtn=document.createElement('button');
    const deleteBtnText=document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className='delete-btn';

    newLi.appendChild(newPara);
    newLi.appendChild(deleteBtn);
    
    fruits.appendChild(newLi);
});

const filter=document.getElementById('filter');
filter.addEventListener('keyup', function(event){
    const textEntered=event.target.value.toLowerCase();
    const fruitItems=document.getElementsByClassName('fruit');


    for(let i=0;i<fruitItems.length;i++){
        const currentFruitText=fruitItems[i].firstChild.textContent.toLowerCase();
        const paraText=fruitItems[i].firstElementChild.textContent.toLowerCase();
        let tempText=currentFruitText+paraText;
        console.log(tempText);

        if(tempText.toLowerCase().indexOf(textEntered)!== -1){
            fruitItems[i].style.display="flex";
        }else{
            fruitItems[i].style.display="none";
        }
    }
})