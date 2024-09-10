import { loadGallery } from "./Get_Imagen.js";
const Formulario = document.getElementById('formulario');

//Funcion para registrar una nueva foto en el localStorage
export const enviarFoto = (e) => {
  e.preventDefault(); 
  const inputFile = document.getElementById('inp-file');
  const file = inputFile.files[0];

  if (file) {
    const contenido = new FileReader();
    contenido.onload = (e) => {
      const image = e.target.result;

      const images = JSON.parse(localStorage.getItem('imagenes')) || [];
      images.push(image);

      localStorage.setItem('imagenes', JSON.stringify(images));
      loadGallery(); 
      swal("Felicidades!!!", "Imagen registrada!", "success");
    };
    contenido.readAsDataURL(file); 
  }
};

Formulario.addEventListener('submit', enviarFoto);
