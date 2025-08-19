import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              to="/"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-warning" : "")
              }
            >
              ReactApp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-warning" : "")
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-warning" : "")
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/posts"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-warning" : "")
              }
            >
              View Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/register"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-warning" : "")
              }
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/recipes"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-warning" : "")
              }
            >
              Recipes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/courses"
              className={(navData) =>
                "nav-link" + (navData.isActive ? " active text-warning" : "")
              }
            >
              Courses
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
