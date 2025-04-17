import React from "react";
import { loginUser } from "../../api/users.api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ usar login del contexto

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loginUser(data);
      if (response.access) {
        localStorage.setItem("access", response.access);
        localStorage.setItem("refresh", response.refresh);

        // Construimos el objeto user
        const userData = {
          id: response.user_id,
          username: response.username,
          role: response.role,
        };

        // ✅ Actualizamos el contexto
        login(userData);

        toast.success("¡Inicio de sesión exitoso!", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });

        // ✅ Redirigimos según el rol
        const role = response.role;
        if (role === "admin") {
          navigate("/admin");
        } else if (role === "cliente") {
          navigate("/home");
        } else if (role === "recepcionista") {
          navigate("/recepcionista");
        } else if (role === "personal_entrega") {
          navigate("/employee-home");
        } else if (role === "personal_recepcion") {
          navigate("/employee-home");
        } else {
          navigate("/home");
        }
      } else {
        console.error(response.error);
        toast.error(response.error || "Error al iniciar sesión", {
          position: "bottom-right",
        });
      }
    } catch (error) {
      toast.error("Error al iniciar sesión", {
        position: "bottom-right",
      });
      console.error(error.response?.data || error.message);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Iniciar Sesión</h2>
          <input
            className="input-user"
            type="text"
            placeholder="Usuario"
            {...register("username", { required: "Este campo es obligatorio" })}
          />
          {errors.username && <span>{errors.username.message}</span>}

          <input
            className="input-pass"
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: "Este campo es obligatorio" })}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <a className="forgot-pass" href="#">
            ¿Olvidaste la contraseña?
          </a>
          <button className="login-btn">Iniciar Sesión</button>
          <p className="p-text-login">
            ¿No tienes cuenta?{" "}
            <a className="text-register" href="register">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}
