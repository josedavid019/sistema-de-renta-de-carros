import React from "react";
import "./Login.css";

export function Login() {
    return (
        <div className="login-container" background="../img/bg.jpg">
            <div className="login-box">
                <h2 className="login-title">Iniciar Sesión</h2>
                <input className="input-user" type="text" placeholder="Usuario" />
                <input className="input-pass" type="password" placeholder="Contraseña" />
                <a className="forgot-pass" href="#">¿Olvidaste la contraseña?</a>
                <button className="login-btn">Iniciar Sesión</button>
                <p className="p-text-login">¿No tienes cuenta? <a className="text-register" href="register">Regístrate</a></p>
                <button className="google-btn-login">Continuar con Google</button>
            </div>
        </div>
    );
};