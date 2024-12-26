import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/Register.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("http://localhost:2026/api/user/login", {
        email: email,
        password: password,
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil Login!",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        history.push("");
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Periksa kembali email dan password Anda",
      });
      console.log(error);
    }
  };

  return (
    <div className="body1 md:text-base lg:h-100vh sm:text-sm">
      <div className="container1">
        <h3>Login</h3>
        <form onSubmit={login} method="POST">
          <label>Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
          <br />
          <button type="submit">Login</button>
          <p>
            Belum punya akun?
            <a href="/register" className="register-link "> Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
