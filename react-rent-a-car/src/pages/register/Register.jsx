import React from "react";
import { createUser } from "../../api/users.api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "./Register.css";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    await createUser(data);
    toast.success("Usuario creado correctamente");
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="register-container">
        <div className="register-box">
          <h2 className="register-title">Registrarse</h2>
          <input
            type="text"
            placeholder="Correo"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Email es requerido</span>}
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Contraseña es requerida</span>}
          <input type="password" placeholder="Confirmar Contraseña" />
          <a href="#">¿Olvidaste la contraseña?</a>
          <button className="register-btn">Registrar</button>
          <p className="p-text-register">
            ¿Ya tienes cuenta? <a href="/">Login</a>
          </p>
          <button className="google-btn">Continuar con Google</button>
        </div>
      </div>
    </form>
  );
}
