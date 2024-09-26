import { Form, NavLink, useNavigate } from "react-router-dom";
import classes from "./login.module.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../store";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function action(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const accountData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    ///kiểm tra input
    function kt() {
      let flag = true;
      if (accountData.email.trim() === "") {
        alert(`Please enter User name! `);

        return (flag = false);
      } else if (accountData.password.trim() === "") {
        alert(`Please enter password ! `);
        return (flag = false);
      }
      return flag;
    }

    const validate = kt();
    if (!validate) {
      return null;
    }

    const getAcount = JSON.parse(localStorage.getItem("userAcount")) || [];

    const userActive = getAcount.find((e) => {
      return (
        e.email === accountData.email && e.password === accountData.password
      );
    });

    if (!userActive) {
      e.target.password.value = "";
      alert(`Login Unsuccessful !`);
      return null;
    }

    alert(`Login Successful !`);

    dispatch(loginAction.ON_LOGIN(userActive));
    return navigate("/");
  }

  return (
    <div className={classes.login}>
      <div className={classes.formbox}>
        <h2>SIGN IN</h2>
        <Form method="POST" onSubmit={action}>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>SIGN IN</button>
        </Form>
        <p>
          Create an account? <NavLink to="../register">Sign up</NavLink>
        </p>
      </div>
    </div>
  );
}
