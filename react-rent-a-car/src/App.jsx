import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, text: 'Perfil', selected: false },
    { id: 2, text: 'Gestión de empleadas', selected: false },
    { id: 3, text: 'Gestión de Cliente', selected: false },
    { id: 4, text: 'Gestion de Vehiculos', selected: false },
    { id: 5, text: 'Informes', selected: false },
    { id: 6, text: 'Cerrar sesión', selected: false },
  ]);

  const [pdfSubido, setPdfSubido] = useState(false);
  const [cedulaCliente, setCedulaCliente] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [cedulaUsuario, setCedulaUsuario] = useState('');
  const [licenciaConduccion, setLicenciaConduccion] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [direccionResidencia, setDireccionResidencia] = useState('');
  const [fechaRegistro, setFechaRegistro] = useState('');
  const [telefonoContacto, setTelefonoContacto] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAdDropdown, setShowAdDropdown] = useState(false);
  const [showUsuariosDropdown, setShowUsuariosDropdown] = useState(false);
  const [isAdMenuOpen, setIsAdMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setIsFormValid(
      cedulaCliente &&
        nombreUsuario &&
        fechaNacimiento &&
        cedulaUsuario &&
        licenciaConduccion &&
        correoElectronico &&
        direccionResidencia &&
        fechaRegistro &&
        telefonoContacto
    );
  }, [
    cedulaCliente,
    nombreUsuario,
    fechaNacimiento,
    cedulaUsuario,
    licenciaConduccion,
    correoElectronico,
    direccionResidencia,
    fechaRegistro,
    telefonoContacto,
  ]);

  const toggleSelectItem = (id) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const subirPdf = () => {
    if (isFormValid && selectedFile) {
      const formData = new FormData();
      formData.append('pdf', selectedFile);
      formData.append('cedulaCliente', cedulaCliente);
      formData.append('nombreUsuario', nombreUsuario);
      formData.append('fechaNacimiento', fechaNacimiento);
      formData.append('cedulaUsuario', cedulaUsuario);
      formData.append('licenciaConduccion', licenciaConduccion);
      formData.append('correoElectronico', correoElectronico);
      formData.append('direccionResidencia', direccionResidencia);
      formData.append('fechaRegistro', fechaRegistro);
      formData.append('telefonoContacto', telefonoContacto);

      fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setPdfSubido(true);
            setNotificationMessage('PDF subido y guardado');
            setShowNotification(true);
            setTimeout(() => {
              setPdfSubido(false);
              setNotificationMessage('');
              setShowNotification(false);
            }, 3000);
          } else {
            alert('Error al subir el PDF');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error al subir el PDF');
        });
    } else {
      alert('Por favor, complete todos los campos del formulario y seleccione un archivo PDF.');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleGestionReservasClick = () => {
    console.log('Gestión de Reservas clickeado');
  };

  const handleHistorialReservasClick = () => {
    console.log('Historial de reservas clickeado');
  };

  const toggleAdDropdown = () => {
    setShowAdDropdown(!showAdDropdown);
    setShowUsuariosDropdown(false);
    setIsAdMenuOpen(!isAdMenuOpen);
  };

  const toggleUsuariosDropdown = () => {
    setShowUsuariosDropdown(!showUsuariosDropdown);
  };

  const handleNotificationClick = () => {
    if (showNotification) {
      alert(notificationMessage);
    } else {
      alert('No hay notificaciones.');
    }
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <img src="/Logo empresa.png" alt="Rent-Car Logo" className="logo" />
        <div className="menu-items">
          <span onClick={handleGestionReservasClick} className="clickable">
            Gestión de Reservas
          </span>
          <span onClick={handleHistorialReservasClick} className="clickable">
            Historial de reservas
          </span>
          <div className={`ad-menu ${isAdMenuOpen ? 'active' : ''}`}>
            <span className="notification-icon" onClick={handleNotificationClick}>
              <FontAwesomeIcon icon={faBell} />
            </span>
            <span onClick={toggleAdDropdown} className="clickable">
              AD
            </span>
            <span>▼</span>
            {showAdDropdown && (
              <div className="ad-dropdown">
                <div className="usuarios-menu">
                  <span className="usuarios-button" onClick={toggleUsuariosDropdown}>
                    Usuarios
                  </span>
                  {showUsuariosDropdown && (
                    <div className="usuarios-dropdown">
                      {menuItems.map((item) => (
                        <span
                          key={item.id}
                          className={item.selected ? 'selected' : ''}
                          onClick={() => toggleSelectItem(item.id)}
                        >
                          {item.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {menuItems.map((item) => (
                  <span
                    key={item.id}
                    className={item.selected ? 'selected' : ''}
                    onClick={() => toggleSelectItem(item.id)}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="main-content">
          <div className="cliente-form">
            <div className="input-with-icon">
              <input
                type="text"
                placeholder="Ingresar la cédula del cliente"
                value={cedulaCliente}
                onChange={(e) => setCedulaCliente(e.target.value)}
                style={{ color: 'black' }}
              />
              <span>▼</span>
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="Nombre del usuario"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
              />
              <input
                type="text"
                placeholder="Fecha de nacimiento"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="Cédula del usuario"
                value={cedulaUsuario}
                onChange={(e) => setCedulaUsuario(e.target.value)}
              />
              <input
                type="text"
                placeholder="Licencia de conducción"
                value={licenciaConduccion}
                onChange={(e) => setLicenciaConduccion(e.target.value)}
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                placeholder="Correo electrónico"
                value={correoElectronico}
                onChange={(e) => setCorreoElectronico(e.target.value)}
              />
              <input
                type="text"
                placeholder="Dirección de residencia"
                value={direccionResidencia}
                onChange={(e) => setDireccionResidencia(e.target.value)}
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="Fecha de vencimiento de la licencia de conducción"
                value={fechaRegistro}
                onChange={(e) => setFechaRegistro(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Teléfono de contacto"
                value={telefonoContacto}
                onChange={(e) => setTelefonoContacto(e.target.value)}
              />
            </div>

            <div className="documentacion">
              <p>Documentación</p>
              <input type="file" onChange={handleFileChange} accept="application/pdf" />
              <button
                onClick={subirPdf}
                disabled={!isFormValid || !selectedFile}
                className={`subir-pdf-button ${
                  isFormValid && selectedFile ? 'subir-pdf-habilitado' : 'subir-pdf-deshabilitado'
                }`}
              >
                Subir PDF
              </button>
              {showNotification && notificationMessage && (
                <p className="pdf-subido-mensaje">{notificationMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;