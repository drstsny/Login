import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");                              
  const history = useHistory();

  const register = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:2026/api/user/register", {
        email: email,
        password: password,
        username: username,
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil Register!",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => {
        history.push("/Login");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body1 md:text-base lg:h-100vh sm:text-sm">
      <div className="container1">
        <h3>Registrasi</h3>
        <form onSubmit={register} method="POST">
          <label>Username</label>
          <br />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            type="text"
          />
          <br />
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
          <button type="submit">Register</button>
          <p>
            Sudah punya akun? 
            <a href="/Login" className="login-link bg-pink-400"> Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}