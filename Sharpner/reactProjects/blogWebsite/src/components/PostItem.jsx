import { useContext } from "react";
import FormContext from "./form-context";

const PostItem = (props) => {
    const ctx = useContext(FormContext);

    const deleteHandler = () => {
        ctx.onDelete(props.id);
    }
    const editHandler = () => {
        ctx.onEdit(props.id, props.url, props.title, props.description);
    }
    return (

        <div key={props.id}>
            <h2>{props.title}</h2>
            <img src={props.url} alt={props.title} style={{ width: '200px', height: '150px' }} />
            <p>{props.description}</p>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default PostItem