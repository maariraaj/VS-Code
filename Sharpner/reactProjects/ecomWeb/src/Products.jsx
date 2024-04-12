import { Fragment } from "react"

const Products = () => {
    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]
    return (
        <Fragment>
            {productsArr.map((product) => {
                return (
                    <div key={Math.random().toString()}>
                        <h3>{product.title}</h3>
                        <img src={product.imageUrl} />
                        <div>
                            <h5>Price: ₹{product.price}</h5>
                            <button>Add to cart</button>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </Fragment>
    )
}

export default Products