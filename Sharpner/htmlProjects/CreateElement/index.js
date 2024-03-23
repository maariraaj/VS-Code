const heading=document.createElement('h3');

const headingText=document.createTextNode('Buy high quality organic fruits online');

heading.appendChild(headingText);

const divs=document.getElementsByTagName('div');
divs[0].appendChild(heading);
heading.style.fontStyle='italic';

const para=document.createElement('p');
const paraText=document.createTextNode('Total fruits: 4');

para.appendChild(paraText);
const fruits=document.querySelector('.fruits');
divs[1].insertBefore(para, fruits);

para.id='fruits-total';