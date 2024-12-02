// Actividad 1
const gatoImg = document.getElementById("gato");

gatoImg.addEventListener("click", () => {
  if (gatoImg.style.border == "2px solid red") {
    gatoImg.style.border = "none";
  } else {
    gatoImg.style.border = "2px solid red";
  }
});

//Actividad 2
const input1 = document.getElementById("input-sticker-1");
const input2 = document.getElementById("input-sticker-2");
const input3 = document.getElementById("input-sticker-3");
const verificarBoton = document.getElementById("verificar-stickers");
const mensaje = document.querySelector(".mensaje");

verificarBoton.addEventListener("click", () => {
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);
  const suma = value1 + value2 + value3;

  if (suma <= 10) {
    mensaje.innerHTML = `Llevas ${suma} stickers`;
  } else {
    mensaje.innerHTML = "Llevas demasiados stickers";
  }
});

//actividad 3
const select1 = document.getElementById("pass-1");
const select2 = document.getElementById("pass-2");
const select3 = document.getElementById("pass-3");
const ingresarBoton = document.getElementById("boton-ingresar");
const mensajePass = document.getElementById("mensaje-password");

ingresarBoton.addEventListener("click", () => {
  const val1 = select1.value;
  const val2 = select2.value;
  const val3 = select3.value;

  if (val1 == "9" && val2 == "1" && val3 == "1") {
    mensajePass.innerHTML = "Password 1 correcto";
  } else if (val1 == "7" && val2 == "1" && val3 == "4") {
    mensajePass.innerHTML = "Password 2 correcto";
  } else {
    mensajePass.innerHTML = "Password incorrecto";
  }
});
