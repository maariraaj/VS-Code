import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';
import Card from '../UI/Card.jsx';

const ExpenseItem=(props) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate calenderDate={props.date}/>
                <div className='expense-item__location'>{props.location}</div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.price}</div>
                </div>
            </Card>
        </li>
    );
}
  
export default ExpenseItem;