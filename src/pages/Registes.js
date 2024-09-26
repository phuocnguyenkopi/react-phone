import { Form, NavLink, redirect } from "react-router-dom";
import classes from "./login.module.css";

export default function Login() {
  return (
    <div className={classes.login}>
      <div className={classes.formbox}>
        <h2>SIGN UP</h2>
        <Form method="POST">
          <input type="text" placeholder="FullName" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <input type="text" placeholder="Phone" name="phone" />
          <button>SIGN UP</button>
        </Form>
        <p>
          Login? <NavLink to="../login">Click</NavLink>
        </p>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();

  const accountData = {
    email: data.get("email"),
    name: data.get("name"),
    password: data.get("password"),
    phone: data.get("phone"),
  };

  // Lấy dữ liệu từ localStorage và chuyển nó thành mảng
  let userAccounts = JSON.parse(localStorage.getItem("userAcount")) || [];

  const validate = kt();

  /// Hàm kiểm tra
  function kt() {
    let flag = true;

    if (accountData.name.trim() === "") {
      alert(`Please enter first name!`);
      flag = false;
      return flag;
    }

    if (accountData.email.trim() === "") {
      alert(`Please enter email!`);
      flag = false;
      return flag;
    }

    userAccounts.forEach((e) => {
      if (accountData.email === e.email) {
        alert(`This email is already registered!`);
        flag = false;
        return flag;
      }
    });

    if (accountData.password.trim() === "") {
      alert(`Please enter password!`);
      flag = false;
      return flag;
    } else if (accountData.password.trim().length <= 8) {
      alert(`Password must be more than 8 characters!`);
      flag = false;
      return flag;
    }

    return flag;
  }

  if (validate) {
    // Thêm tài khoản mới vào mảng
    userAccounts.push(accountData);
    // Lưu mảng lại vào localStorage
    localStorage.setItem("userAcount", JSON.stringify(userAccounts));

    alert(`Registration successful`);
  }

  return validate && redirect("/login");
}
