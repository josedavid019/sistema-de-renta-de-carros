import React from "react";
import "./Register.css";

export function Register() {
    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Registrarse</h2>
                <input type="text" placeholder="Correo" />
                <input type="password" placeholder="Contraseña" />
                <input type="password" placeholder="Confirmar Contraseña" />
                <a href="#">¿Olvidaste la contraseña?</a>
                <button className="register-btn">Registrar</button>
                <p>¿Ya tienes cuenta? <a href="/">Login</a></p>
                <button className="google-btn">Continuar con Google</button>
            </div>
        </div>
    );
};
