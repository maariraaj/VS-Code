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
                    url={item.url}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </Fragment>
    )
}

export default PostList