import { NavLink, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../store";
import { getAuthtoken } from "../util/auth";

export default function Header() {
  const login = getAuthtoken();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    const promptLogout = window.confirm(`Are you sure you logged out?`);

    if (promptLogout) {
      dispatch(loginAction.ON_LOGOUT());
      navigate("/");
    } else {
      return false;
    }
  }

  return (
    <>
      <header className={classes.header}>
        <main>
          <nav className={classes["nav-left"]}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="shop"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  shop
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={classes["nav-center"]}>
            <NavLink to="/"> BOUTIQUE</NavLink>
          </div>

          <nav className={classes["nav-right"]}>
            <ul>
              <li>
                <NavLink
                  to="cart"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  <i className="fa-solid fa-cart-flatbed-suitcase"></i> Cart
                </NavLink>
              </li>

              {!login ? (
                <li>
                  <NavLink
                    to="login"
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                  >
                    <i className="fa-solid fa-user"></i> Login
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <button>
                      <i className="fa-solid fa-user"></i> {login.name}
                    </button>
                  </li>
                  <li>
                    <button onClick={handleLogout}>(Logout)</button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </main>
      </header>
    </>
  );
}
