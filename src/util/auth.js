import { redirect } from "react-router-dom";

export function getAuthtoken() {
  const isLogin = JSON.parse(localStorage.getItem("login"));

  if (!isLogin) {
    return null;
  }

  return isLogin;
}

export function getAuth() {
  const isLogin = getAuthtoken();
  console.log(isLogin);
  if (isLogin) {
    return redirect("/");
  }

  return isLogin;
}
