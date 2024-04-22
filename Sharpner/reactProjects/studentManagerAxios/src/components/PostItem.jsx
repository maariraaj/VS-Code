import { useContext } from "react";
import FormContext from "./form-context";

const PostItem = (props) => {
    const ctx = useContext(FormContext);

    const deleteHandler = () => {
        ctx.onDelete(props.id);
    }
    const editHandler = () => {
        ctx.onEdit(props.id, props.name, props.mobile, props.address);
    }
    return (

        <div key={props.id}>
            <span>Name:{props.name}-</span>
            <span>Mobile:{props.mobile}-</span>
            <span>Address:{props.address}{' '}</span>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default PostItem