import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <Link to="/" className="project-title">
        <h3 >PizzaPizza</h3>
      </Link>

      <Link to="/login">
        <h3>Login</h3>
      </Link>

      <Link to="/signup">
        <h3>Signup</h3>
      </Link>
    </div>
  );
}

export default NavBar;
