import { Link } from "react-router-dom"
import "./Pagenotfound.css"

const Pagenotfound = () => {
  return (
    <div>
        <div className="container">
          <div id="pagenotfound-header-div">
            <h1 id="page-not-found-header">404 - Page Not Found</h1>
            <p className="page-not-found-paragraph">{`Oops! It seems like the page you're looking for doesn't exist.`}</p>
          </div>
          <Link to={"../../"}>
            <img id="funny-404-picture" src="https://i.guim.co.uk/img/media/7502aa73f76cba849d301cff9d2e99b2721e92ed/0_87_3780_2268/master/3780.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=63847366260b97dcba2dec36105343b4" alt="funny-bird" />
          </Link>
        </div>
    </div>
  )
}

export default Pagenotfound