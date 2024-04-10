import { useContext, useState } from "react"
import FormContext from "./form-context"

const InputForm = () => {
    const ctx = useContext(FormContext);

    const urlChangeHandler = (event) => {
        ctx.setUrl(event.target.value);
    }
    const titleChangeHandler = (event) => {
        ctx.setTitle(event.target.value);
    }
    const descriptionChangeHandler = (event) => {
        ctx.setDescription(event.target.value);
    }
    const closeHandler=()=>{
        ctx.onClose();
        ctx.setUrl('')
        ctx.setDescription('')
        ctx.setTitle('')
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        ctx.onInput();
        ctx.onClose();
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="imageurl">Image Url:</label>
            <input type="url" id="imageurl" value={ctx.url} onChange={urlChangeHandler} required/>
            <br/>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={ctx.title} onChange={titleChangeHandler} required/>
            <br/>
            <label htmlFor="description">Blog Description:</label>
            <input type="text" id="description" value={ctx.description} onChange={descriptionChangeHandler} required/>
            <br/>
            <br/>
            <div>
                <button type="submit" >Post Blog</button>
                <button type="button" onClick={closeHandler}>Close</button>
            </div>
        </form>
    )
}

export default InputForm