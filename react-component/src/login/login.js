import React from "react";
import './login.css';

const Login = () => {
    return (
        <div className="container">
            <h2>Form Login</h2>
            <div className="form-login">
                <h1>Tugas Pertemuan Ketiga</h1>
                <form action="" method="POST">
                    <p>
                        <label>
                            <b>Username</b>
                            <input type="text" placeholder="Masukkan Username"></input>
                        </label>
                    </p>
                    <p>
                        <label>
                            <b>Password</b>
                            <input type="password" placeholder="Masukkan Password"></input>
                        </label>
                    </p>
                    <button className="login">Login</button>
                </form>
                <input type="checkbox"></input>Remember Me
                <button className="cancle-login">Cancle</button>
            </div>
        </div>
    )
}

export default Login;