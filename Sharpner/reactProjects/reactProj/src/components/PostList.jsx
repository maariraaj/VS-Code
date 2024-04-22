import { Fragment, useContext } from "react"
import FormContext from "./form-context"
import PostItem from "./PostItem";

const PostList = () => {
    const ctx = useContext(FormContext);

    return (
        <Fragment>
            {ctx.data.map((item) => (
                <PostItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    mobile={item.mobile}
                    address={item.address}
                />
            ))}
        </Fragment>
    )
}

export default PostList