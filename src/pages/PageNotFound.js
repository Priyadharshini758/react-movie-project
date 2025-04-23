import { Link } from "react-router-dom";
import notfound from "../assets/pagenot.jpg";

export const PageNotFound = () => {
  return (
    <div className="container text-center">
      <img src={notfound} className="img-fluid d-block mx-auto" alt="Page not found" />
      <p>
        <Link to='/' className="btn btn-danger">Go to Home page</Link>
      </p>
    </div>
  );
};
