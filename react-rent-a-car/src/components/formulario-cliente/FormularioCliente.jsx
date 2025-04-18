import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "./FormularioCliente.css";

export function FormularioCliente({
  mode = "create",
  defaultValues = {},
  onSubmit,
  title = "",
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues });

  const password = watch("user_password", "");

  useEffect(() => {
    if (mode !== "create") {
      for (const key in defaultValues) {
        setValue(key, defaultValues[key]);
      }
    }
  }, [defaultValues, mode, setValue]);

  const isViewMode = mode === "view";

  const handleInternalSubmit = handleSubmit(async (data) => {
    try {
      const { confirmPassword, ...cleanData } = data;
      await onSubmit(cleanData);
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Error al procesar el formulario", {
        position: "bottom-right",
        style: {
          background: "#ff3a3a",
          color: "#fff",
        },
      });
    }
  });

  return (
    <form onSubmit={handleInternalSubmit}>
      <div className="formulario-container">
        <div className="formulario-box">
          <div>{title && <h1 className="formulario-title">{title}</h1>}</div>
          <div>
            <div className="formulario-div-input">
              <label htmlFor="form-username" className="formulario-label">
                Usuario:
              </label>
              <input
                id="form-username"
                className="input-user-formulario"
                type="text"
                placeholder="Usuario"
                {...register("user_username", { required: true })}
                disabled={isViewMode}
              />
              {errors.user_username && (
                <span className="formulario-error">Usuario es requerido</span>
              )}
            </div>
            {mode === "create" && (
              <>
                <div className="formulario-div-input">
                  <label htmlFor="form-password" className="formulario-label">
                    Contraseña:
                  </label>
                  <input
                    id="form-password"
                    type="password"
                    placeholder="Contraseña"
                    {...register("user_password", { required: true })}
                  />
                  {errors.user_password && (
                    <span className="formulario-error">
                      Contraseña es requerida
                    </span>
                  )}
                </div>
                <div className="formulario-div-input">
                  <label
                    htmlFor="form-confirm-password"
                    className="formulario-label"
                  >
                    Confirmar Contraseña:
                  </label>
                  <input
                    id="form-confirm-password"
                    type="password"
                    placeholder="Confirmar Contraseña"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === password || "Las contraseñas no coinciden",
                    })}
                  />
                  {errors.confirmPassword && (
                    <span className="formulario-error">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="formulario-div-column">
            <div className="formulario-subdiv-column">
              <div className="formulario-div-input">
                <label htmlFor="form-firstname" className="formulario-label">
                  Primer Nombre:
                </label>
                <input
                  id="form-firstname"
                  className="formulario-input"
                  type="text"
                  placeholder="Primer Nombre"
                  {...register("user_firstname", { required: true })}
                  disabled={isViewMode}
                />
                {errors.user_firstname && (
                  <span className="formulario-error">
                    Primer Nombre es requerido
                  </span>
                )}
              </div>
              <div className="formulario-div-input">
                <label htmlFor="form-lastname" className="formulario-label">
                  Primer Apellido:
                </label>
                <input
                  id="form-lastname"
                  className="formulario-input"
                  type="text"
                  placeholder="Primer Apellido"
                  {...register("user_lastname", { required: true })}
                  disabled={isViewMode}
                />
                {errors.user_lastname && (
                  <span className="formulario-error">
                    Primer Apellido es requerido
                  </span>
                )}
              </div>
              <div className="formulario-div-input">
                <label htmlFor="form-dateofbirth" className="formulario-label">
                  Fecha de Nacimiento:
                </label>
                <input
                  id="form-dateofbirth"
                  className="formulario-input"
                  type="date"
                  placeholder="Fecha de Nacimiento"
                  {...register("user_dateofbirth", { required: true })}
                  disabled={isViewMode}
                />
                {errors.user_dateofbirth && (
                  <span className="formulario-error">
                    Fecha de Nacimiento es requerida
                  </span>
                )}
              </div>
              <div className="formulario-div-input">
                <label htmlFor="form-email" className="formulario-label">
                  Email:
                </label>
                <input
                  id="form-email"
                  className="formulario-input"
                  type="email"
                  placeholder="Email"
                  {...register("user_email", { required: true })}
                  disabled={isViewMode}
                />
                {errors.user_email && (
                  <span className="formulario-error">Email es requerido</span>
                )}
              </div>
            </div>
            <div className="formulario-subdiv-column">
              <div className="formulario-div-input">
                <label htmlFor="form-secondname" className="formulario-label">
                  Segundo Nombre:
                </label>
                <input
                  id="form-secindname"
                  className="formulario-input"
                  type="text"
                  placeholder="Segundo Nombre"
                  {...register("user_secondname")}
                  disabled={isViewMode}
                />
              </div>
              <div className="formulario-div-input">
                <label
                  htmlFor="form-secondlastname"
                  className="formulario-label"
                >
                  Segundo Apellido:
                </label>
                <input
                  id="form-secondlastname"
                  className="formulario-input"
                  type="text"
                  placeholder="Segundo Apellido"
                  {...register("user_second_lastname")}
                  disabled={isViewMode}
                />
              </div>
              <div className="formulario-div-input">
                <label htmlFor="form-cedula" className="formulario-label">
                  Cédula:
                </label>
                <input
                  id="form-cedula"
                  className="formulario-input"
                  type="text"
                  placeholder="Cédula"
                  {...register("user_cedula", { required: true })}
                  disabled={isViewMode}
                />
                {errors.user_cedula && (
                  <span className="formulario-error">Cédula es requerida</span>
                )}
              </div>
              <div className="formulario-div-input">
                <label htmlFor="form-phone" className="formulario-label">
                  Teléfono:
                </label>
                <input
                  id="form-phone"
                  className="formulario-input"
                  type="text"
                  placeholder="Teléfono"
                  {...register("user_phone", { required: true })}
                  disabled={isViewMode}
                />
                {errors.user_phone && (
                  <span className="formulario-error">
                    Teléfono es requerido
                  </span>
                )}
              </div>
            </div>
          </div>
          <div>
            {!isViewMode && (
              <button className="formulario-btn" type="submit">
                {mode === "edit" ? "Guardar Cambios" : "Registrar"}
              </button>
            )}
          </div>
          <div>
            <p className="p-text-register">
              ¿Ya tienes cuenta?{" "}
              <a className="text-login" href="/login">
                Iniciar sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
