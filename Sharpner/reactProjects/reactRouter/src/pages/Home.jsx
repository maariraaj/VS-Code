import { Fragment } from "react"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <Fragment>
        <h1>HomePage</h1>
        <p>
            Go to <Link to='/products'>The Products Page</Link>
        </p>
    </Fragment>
  )
}

export default HomePage