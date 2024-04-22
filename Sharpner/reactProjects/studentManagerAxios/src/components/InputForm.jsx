import { useContext } from "react"
import FormContext from "./form-context"

const InputForm = () => {
    const ctx = useContext(FormContext);

    const nameChangeHandler = (event) => {
        ctx.setName(event.target.value);
    }
    const mobileChangeHandler = (event) => {
        ctx.setMobile(event.target.value);
    }
    const addressChangeHandler = (event) => {
        ctx.setAddress(event.target.value);
    }
    const closeHandler = () => {
        ctx.onClose();
        ctx.setName('')
        ctx.setAddress('')
        ctx.setMobile('')
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        ctx.onInput();
        ctx.onClose();
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Name :</label>
            <input type="text" id="name" value={ctx.name} onChange={nameChangeHandler} required />
            <br />
            <label htmlFor="mobile">Mobile:</label>
            <input type="tel" id="mobile" value={ctx.mobile} onChange={mobileChangeHandler} required />
            <br />
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={ctx.address} onChange={addressChangeHandler} required />
            <br />
            <br />
            <div>
                <button type="submit" >Add</button>
                <button type="button" onClick={closeHandler}>Close</button>
            </div>
        </form>
    )
}

export default InputForm