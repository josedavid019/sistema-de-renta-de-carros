import React from "react";
import { createUser } from "../../api/users.api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "./Register.css";

export function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = handleSubmit(async (data) => {
    await createUser(data);
    toast.success("Usuario creado correctamente", {
      position: "bottom-right",
      style: {
        background: "#101010",
        color: "#fff",
      },
    });
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="register-container">
        <div className="register-box">
          <h2 className="register-title">Registrarse</h2>
          <input
            className="input-email-register"
            type="text"
            placeholder="Correo"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Email es requerido</span>}
          <input
            className="input-pass-register"
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Contraseña es requerida</span>}
          <input
            className="input-confirm-pass-register"
            type="password"
            placeholder="Confirmar Contraseña"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password || "Las contraseñas no coinciden",
            })}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          <button className="register-btn">Registrar</button>
          <p className="p-text-register">
            ¿Ya tienes cuenta? <a className="text-login" href="/login">Inicar sesión</a>
          </p>
          <button className="google-btn-register">Continuar con Google</button>
        </div>
      </div>
    </form>
  );
}
