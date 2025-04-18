import React from "react";
import { registerUser } from "../../api/users.api";
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
    try {
      await registerUser(data);
      toast.success("Usuario creado correctamente", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } catch (error) {
      toast.error("Error al registrar usuario", {
        position: "bottom-right",
      });
      console.error(error.response?.data || error.message);
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="register-container">
        <div className="register-box">
          <h2 className="register-title">Registrarse</h2>
          <input
            className="input-user-register"
            type="text"
            placeholder="Usuario"
            {...register("username", { required: true })}
          />
          {errors.username && <span>Usuario es requerido</span>}
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
          <input
            className="register-input"
            type="text"
            placeholder="Primer Nombre"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && <span>Primer Nombre es requerido</span>}
          <input
            className="register-input"
            type="text"
            placeholder="Segundo Nombre"
            {...register("secondname", { required: true })}
          />
          {errors.secondname && <span>Segundo Nombre es requerido</span>}
          <input
            className="register-input"
            type="text"
            placeholder="Primer Apellido"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && <span>Primer Apellido es requerido</span>}
          <input
            className="register-input"
            type="text"
            placeholder="Segundo Apellido"
            {...register("second_lastname", { required: true })}
          />
          {errors.second_lastname && <span>Segundo Apellido es requerido</span>}
          <input
            className="register-input"
            type="date"
            placeholder="Fecha de Nacimiento"
            {...register("dateofbirth", { required: true })}
          />
          {errors.dateofbirth && <span>Fecha de Nacimiento es requerida</span>}
          <input
            className="register-input"
            type="text"
            placeholder="CC"
            {...register("cedula", { required: true })}
          />
          {errors.cedula && <span>CC es requerida</span>}
          <input
            className="register-input"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Email es requerido</span>}
          <input
            className="register-input"
            type="text"
            placeholder="Telefono"
            {...register("phone", { required: true })}
          />
          {errors.phone && <span>Telefono es requerido</span>}
          <button className="register-btn">Registrar</button>
          <p className="p-text-register">
            ¿Ya tienes cuenta?{" "}
            <a className="text-login" href="/login">
              Inicar sesión
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}
