const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

// Configuración de Multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Ruta para subir PDF
app.post('/upload', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file selected.' });
  }

  // Aquí puedes guardar los datos del formulario en una base de datos si lo deseas
  console.log('File uploaded:', req.file);
  console.log('Form data:', req.body); // Imprime los datos del formulario

  res.json({ success: true, message: 'File uploaded successfully.' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});