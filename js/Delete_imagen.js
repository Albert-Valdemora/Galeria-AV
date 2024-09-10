import { loadGallery } from "./Get_Imagen.js";

//Funcion para eliminar las imagenes del localStorage
export const deleteImage = (index) => {
  let images = JSON.parse(localStorage.getItem('imagenes')) || []
  images.splice(index, 1);
  localStorage.setItem('imagenes', JSON.stringify((images)))
  swal("Felicidades!!!", "La tarea imagen fue eliminada", "success");
  loadGallery();
}