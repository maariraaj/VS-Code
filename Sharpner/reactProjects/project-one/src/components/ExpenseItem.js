import React from 'react';
import './ExpenseItem.css';

// function ExpenseItem(){
//     return(
//       <div>
//         <div>Food - $5</div>
//         <div>Petrol - $20</div>
//         <div>Movie - $10</div>
//       </div>
//     )
//   }
//   export default ExpenseItem;


// function ExpenseItem(){
//     return (
//       <div>
//         <div>15 August 2023</div>
//         <div>
//           <h2>Book</h2>
//           <div>$10</div>
//         </div>     
//         <div>Delhi</div>
//       </div>
//     );
//   }
//   export default ExpenseItem;


function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>15 August 2023</div>
            <div className='expense-item__location'>Delhi</div>
            <div className='expense-item__description'>
            <h2>Book</h2>
            <div className='expense-item__price'>$10</div>
            
            </div>
        </div>
    );
  }
  
  export default ExpenseItem;