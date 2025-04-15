export const horasDisponibles = [];

for (let h = 0; h < 24; h++) {
  for (let m = 0; m < 60; m += 30) {
    const hora = h.toString().padStart(2, "0");
    const minuto = m.toString().padStart(2, "0");
    horasDisponibles.push(`${hora}:${minuto}`);
  }
}
