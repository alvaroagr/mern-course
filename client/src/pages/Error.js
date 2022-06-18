import { Link } from "react-router-dom"
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className="full-page">
        <div>
            <img src={img} alt="not found" />
            <h3>Error</h3>
            <p>The page you're looking for has not been found.</p>
            <Link to="/">back home</Link>
        </div>
    </Wrapper>
  )
}
export default Error