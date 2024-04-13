import { Fragment, useContext } from "react"
import CartContext from "./cart-context"
import ProductsList from "./ProductsList";

const Products = () => {
    const ctx = useContext(CartContext);

    return (
        <Fragment>
            {ctx.items.map((item) => (
                <ProductsList
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={item.price} />
            ))}
        </Fragment>
    )
}

export default Products