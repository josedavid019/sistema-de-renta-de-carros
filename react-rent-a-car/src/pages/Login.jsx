import React from "react";
import "./Login.css";

export function Login() {
    return (
        <div className="login-container" background="../img/bg.jpg">
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <a href="#">¿Olvidaste la contraseña?</a>
                <button className="login-btn">Iniciar Sesión</button>
                <p>¿No tienes cuenta? <a href="register">Regístrate</a></p>
                <button className="google-btn">Continuar con Google</button>
            </div>
        </div>
    );
};