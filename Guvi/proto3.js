let animal={
    moves:true,
    eats:true,
    sleep:true,
 };

 let rabbit={
    jump:true,
 };
 
 let lion={
    kills:true,
 };

 lion.__proto__=rabbit;
 rabbit.__proto__=animal;
//  lion.__proto__=animal;
   

 
//   console.log(rabbit.eats);
//   console.log(rabbit.sleep);
//   console.log(lion.eats); 
//   console.log(lion.kills);
console.log(lion.kills);  
console.log(lion.sleep);
console.log(lion.jump);    