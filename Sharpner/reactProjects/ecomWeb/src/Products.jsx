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
                    <div key={Math.random().toString()} className="card p-3" >
                        <h3 className="card-header">{product.title}</h3>
                        <img src={product.imageUrl} className="card-img" />
                        <div className="card-footer">
                            <h5>Price: ₹{product.price}</h5>
                            <button type="button" className="btn btn-success">Add to cart</button>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default Products