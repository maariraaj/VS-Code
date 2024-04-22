import { useContext } from "react";
import InputForm from "./InputForm";
import FormContext from "./form-context";
import Modal from "./Modal";

const Home = () => {
    const ctx = useContext(FormContext);
    return (
        <Modal >
            {ctx.formIsShown && <InputForm />}
        </Modal>
    )
}

export default Home